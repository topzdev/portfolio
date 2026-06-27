"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChatAssistantIcon } from "@/components/chat/ChatAssistantIcon";
import { FormattedMessage } from "@/components/chat/FormattedMessage";
import { useChat } from "@/components/providers/ChatProvider";
import {
  CHAT_SUGGESTED_QUESTIONS,
  CHAT_WELCOME_MESSAGE,
} from "@/lib/data/chatbot";
import { checkClientRateLimit } from "@/lib/chat/clientRateLimit";
import { navigateToWebsiteSection } from "@/lib/chat/navigateToSection";
import {
  loadStoredChatMessages,
  saveStoredChatMessages,
} from "@/lib/chat/storage";
import type { ChatMessage } from "@/lib/chat/types";
import { useTypewriter } from "@/lib/chat/useTypewriter";
import { cn } from "@/lib/utils";

export type { ChatMessage } from "@/lib/chat/types";

type PortfolioChatProps = {
  variant?: "widget" | "page";
  className?: string;
  onClose?: () => void;
  fullscreen?: boolean;
};

type PendingReply = {
  id: string;
  text: string;
};

function createId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function createWelcomeMessage(): ChatMessage {
  return { id: "welcome", role: "assistant", content: CHAT_WELCOME_MESSAGE };
}

function AssistantTypingBubble({
  text,
  onComplete,
  onSectionNavigate,
}: {
  text: string;
  onComplete: () => void;
  onSectionNavigate?: (sectionId: string) => void;
}) {
  const completedRef = useRef(false);
  const handleComplete = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  }, [onComplete]);

  const displayed = useTypewriter(text, true, handleComplete);

  return (
    <div className="flex justify-start">
      <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-border bg-surface px-3.5 py-2.5 text-sm leading-relaxed text-ink">
        <FormattedMessage
          content={displayed}
          showCaret
          onSectionNavigate={onSectionNavigate}
        />
      </div>
    </div>
  );
}

export function PortfolioChat({
  variant = "widget",
  className,
  onClose,
  fullscreen = false,
}: PortfolioChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pendingReply, setPendingReply] = useState<PendingReply | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const lastSentAtRef = useRef(0);
  const recentSendsRef = useRef<number[]>([]);

  const pathname = usePathname();
  const { closeChat } = useChat();

  const handleSectionNavigate = useCallback(
    (sectionId: string) => {
      navigateToWebsiteSection(sectionId, {
        pathname: pathname ?? "/",
        closeChat: variant === "widget" ? closeChat : undefined,
      });
    },
    [closeChat, pathname, variant],
  );

  const isPage = variant === "page";
  const isBusy = isLoading || pendingReply !== null;
  const showSuggestions =
    ready &&
    messages.length === 1 &&
    messages[0]?.id === "welcome" &&
    !isBusy;

  useEffect(() => {
    const stored = loadStoredChatMessages();
    setMessages(stored ?? [createWelcomeMessage()]);
    setReady(true);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading, pendingReply, ready]);

  useEffect(() => {
    if (!pendingReply) return;

    const timer = window.setInterval(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
      });
    }, 80);

    return () => window.clearInterval(timer);
  }, [pendingReply]);

  const persistMessages = useCallback((nextMessages: ChatMessage[]) => {
    saveStoredChatMessages(nextMessages);
  }, []);

  const handleTypingComplete = useCallback(() => {
    if (!pendingReply) return;

    const assistantMessage: ChatMessage = {
      id: pendingReply.id,
      role: "assistant",
      content: pendingReply.text,
    };

    setMessages((current) => {
      const next = [...current, assistantMessage];
      persistMessages(next);
      return next;
    });

    setPendingReply(null);
    inputRef.current?.focus();
  }, [pendingReply, persistMessages]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isBusy) return;

    const rateLimit = checkClientRateLimit(
      lastSentAtRef.current,
      recentSendsRef.current,
    );

    if (!rateLimit.allowed) {
      setError(rateLimit.message ?? "Please wait before sending another message.");
      return;
    }

    setError(null);
    setInput("");

    const now = Date.now();
    lastSentAtRef.current = now;
    recentSendsRef.current = [...recentSendsRef.current, now].filter(
      (timestamp) => now - timestamp < 60_000,
    );

    const userMessage: ChatMessage = {
      id: createId(),
      role: "user",
      content: trimmed,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    persistMessages(nextMessages);
    setIsLoading(true);

    try {
      const history = nextMessages
        .filter((message) => message.id !== "welcome")
        .map((message) => ({
          role: message.role,
          content: message.content,
        }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error(data.error ?? "Too many requests. Please wait a moment.");
        }
        throw new Error(data.error ?? "Failed to get a response.");
      }

      const reply = data.reply?.trim();
      if (!reply) {
        throw new Error("Empty response from assistant.");
      }

      setPendingReply({ id: createId(), text: reply });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage(input);
  };

  if (!ready) {
    return (
      <div
        className={cn(
          "flex items-center justify-center border border-border bg-surface-elevated",
          isPage
            ? "min-h-[min(70vh,640px)] rounded-2xl"
            : "h-full rounded-2xl",
          className,
        )}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden border border-border bg-surface-elevated",
        isPage
          ? "min-h-[min(70vh,640px)] rounded-2xl shadow-lg"
          : fullscreen
            ? "h-full rounded-none border-0 shadow-none"
            : "h-full rounded-2xl shadow-2xl",
        className,
      )}
    >
      <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-surface px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ChatAssistantIcon className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-ink">
              Portfolio Assistant
            </p>
            <p className="truncate text-xs text-ink-muted">
              Christian Lugod · AI helper
            </p>
          </div>
        </div>
        {onClose ? (
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-surface hover:text-ink"
            aria-label="Close chat"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path
                d="M4 4l8 8M12 4l-8 8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        ) : null}
      </header>

      <div
        ref={scrollRef}
        className="flex-1 space-y-3 overflow-y-auto px-4 py-4"
        aria-live="polite"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex",
              message.role === "user" ? "justify-end" : "justify-start",
            )}
          >
            <div
              className={cn(
                "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                message.role === "user"
                  ? "rounded-br-md bg-primary text-white"
                  : "rounded-bl-md border border-border bg-surface text-ink",
              )}
            >
              {message.role === "assistant" ? (
                <FormattedMessage
                  content={message.content}
                  onSectionNavigate={handleSectionNavigate}
                />
              ) : (
                <span className="whitespace-pre-wrap">{message.content}</span>
              )}
            </div>
          </div>
        ))}

        {showSuggestions ? (
          <div className="py-4">
            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-ink-subtle">
              Suggested questions
            </p>
            <div className="flex flex-wrap gap-2">
              {CHAT_SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void sendMessage(question)}
                  disabled={isBusy}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-left text-xs text-ink-muted transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-50"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {isLoading ? (
          <div className="flex justify-start">
            <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border border-border bg-surface px-4 py-3">
              <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
              <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
            </div>
          </div>
        ) : null}

        {pendingReply ? (
          <AssistantTypingBubble
            key={pendingReply.id}
            text={pendingReply.text}
            onComplete={handleTypingComplete}
            onSectionNavigate={handleSectionNavigate}
          />
        ) : null}
      </div>

      {error ? (
        <p className="shrink-0 px-4 pb-2 text-xs text-red-600 dark:text-red-400" role="alert">
          {error}
        </p>
      ) : null}

      <form
        onSubmit={handleSubmit}
        className="flex shrink-0 items-center gap-2 border-t border-border p-3"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask about skills, projects, experience..."
          disabled={isBusy}
          className="min-w-0 flex-1 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60"
          aria-label="Chat message"
        />
        <button
          type="submit"
          disabled={isBusy || !input.trim()}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Send message"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
