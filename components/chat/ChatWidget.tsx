"use client";

import { usePathname } from "next/navigation";
import { useChat } from "@/components/providers/ChatProvider";
import { PortfolioChat } from "@/components/chat/PortfolioChat";
import { cn } from "@/lib/utils";
import { SVGProps } from "react";


export function HugeiconsArtificialIntelligence08(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>{/* Icon from Huge Icons by Hugeicons - undefined */}<path fill="none" stroke="currentColor" strokeWidth="1.5" d="M9.6 6.112c.322-.816 1.478-.816 1.8 0l.91 2.31a5.8 5.8 0 0 0 3.268 3.268l2.31.91c.816.322.816 1.478 0 1.8l-2.31.91a5.8 5.8 0 0 0-3.268 3.268l-.91 2.31c-.322.816-1.478.816-1.8 0l-.91-2.31a5.8 5.8 0 0 0-3.268-3.268l-2.31-.91c-.816-.322-.816-1.478 0-1.8l2.31-.91A5.8 5.8 0 0 0 8.69 8.422zm8.563-3.382a.363.363 0 0 1 .674 0l.342.866c.221.56.665 1.004 1.225 1.225l.866.342a.363.363 0 0 1 0 .674l-.866.342a2.18 2.18 0 0 0-1.225 1.225l-.342.866a.363.363 0 0 1-.674 0l-.342-.866a2.18 2.18 0 0 0-1.225-1.225l-.867-.342a.363.363 0 0 1 0-.674l.867-.342a2.18 2.18 0 0 0 1.225-1.225z" /></svg>
  )
}

export function ChatWidget() {
  const pathname = usePathname();
  const { isOpen, toggleChat, closeChat } = useChat();

  if (pathname === "/chat") {
    return null;
  }

  return (
    <>

      <div className={cn("fixed bottom-20 right-4 z-[55] sm:bottom-20 sm:right-6", isOpen ? "pointer-events-auto" : "pointer-events-none")}>
        <div
          className={cn(
            "mb-3 origin-bottom-right transition-all duration-300 ease-out",
            isOpen
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0",
          )}
          aria-hidden={!isOpen}
        >
          <div className="h-[min(90vh,500px)] sm:h-[min(70vh,520px)] w-[min(calc(100vw-2rem),380px)]">
            <PortfolioChat variant="widget" onClose={closeChat} />
          </div>
        </div>

      </div>
      <button
        type="button"
        onClick={toggleChat}
        className={cn(
          "fixed bottom-5 right-4 z-[35] sm:bottom-6 sm:right-6 ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface-elevated text-primary shadow-[0_8px_32px_rgba(9,147,229,0.25)] transition-all hover:scale-105 hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          isOpen && "bg-primary dark:text-white",
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
          <HugeiconsArtificialIntelligence08 className="w-6 h-6" />
        )}
      </button>
    </>

  );
}
