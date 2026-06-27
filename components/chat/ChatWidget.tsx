"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useChat } from "@/components/providers/ChatProvider";
import { ChatAssistantIcon } from "@/components/chat/ChatAssistantIcon";
import { PortfolioChat } from "@/components/chat/PortfolioChat";
import { cn } from "@/lib/utils";

export function ChatWidget() {
  const pathname = usePathname();
  const { isOpen, toggleChat, closeChat } = useChat();

  useEffect(() => {
    if (!isOpen) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (!isMobile) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (pathname === "/chat") {
    return null;
  }

  return (
    <>
      {/* Mobile fullscreen chat */}
      <div
        className={cn(
          "fixed inset-0 z-[70] md:hidden",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!isOpen}
      >
        <div
          className={cn(
            "absolute inset-0 bg-ink/40 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0",
          )}
          onClick={closeChat}
          aria-hidden
        />
        <div
          className={cn(
            "relative flex h-full flex-col bg-surface-elevated transition-transform duration-300 ease-out",
            isOpen ? "translate-y-0" : "translate-y-full",
          )}
        >
          <PortfolioChat variant="widget" fullscreen onClose={closeChat} />
        </div>
      </div>

      {/* Desktop floating panel */}
      <div
        className={cn(
          "fixed bottom-20 right-4 z-[55] hidden sm:bottom-20 sm:right-6 md:block",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          className={cn(
            "mb-3 origin-bottom-right transition-all duration-300 ease-out",
            isOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0",
          )}
          aria-hidden={!isOpen}
        >
          <div className="h-[min(70vh,520px)] w-[min(calc(100vw-2rem),380px)]">
            <PortfolioChat variant="widget" onClose={closeChat} />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={toggleChat}
        className={cn(
          "fixed bottom-5 right-4 z-[35] ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface-elevated text-primary shadow-[0_8px_32px_rgba(9,147,229,0.25)] transition-all hover:scale-105 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:bottom-6 sm:right-6",
          isOpen && "bg-primary dark:text-white md:bg-primary",
        )}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <ChatAssistantIcon className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
