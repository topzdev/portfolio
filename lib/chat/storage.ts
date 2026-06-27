import type { ChatMessage } from "@/lib/chat/types";

export const CHAT_STORAGE_KEY = "portfolio-chat-messages";
export const CHAT_MAX_STORED_MESSAGES = 50;

type StoredChat = {
  messages: ChatMessage[];
  updatedAt: number;
};

function isValidMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const message = value as ChatMessage;
  return (
    typeof message.id === "string" &&
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string"
  );
}

export function loadStoredChatMessages(): ChatMessage[] | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(CHAT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as StoredChat;
    if (!Array.isArray(parsed.messages)) return null;

    const messages = parsed.messages.filter(isValidMessage);
    return messages.length > 0 ? messages : null;
  } catch {
    return null;
  }
}

export function saveStoredChatMessages(messages: ChatMessage[]): void {
  if (typeof window === "undefined") return;

  try {
    const persistable = messages
      .filter((message) => message.content.length > 0)
      .slice(-CHAT_MAX_STORED_MESSAGES);

    const payload: StoredChat = {
      messages: persistable,
      updatedAt: Date.now(),
    };

    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Storage may be unavailable in private browsing.
  }
}

export function clearStoredChatMessages(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CHAT_STORAGE_KEY);
}
