"use client";

import { useChat } from "@/components/providers/ChatProvider";import { Button } from "@/components/ui/Button";
import { aboutChatSection } from "@/lib/data/chatbot";

export function ChatCta() {
  const { openChat } = useChat();

  return (
    <>
      <Button type="button" onClick={openChat}>
        {aboutChatSection.ctaLabel}
      </Button>
     </>
  );
}
