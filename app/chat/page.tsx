import type { Metadata } from "next";
import Link from "next/link";
import { PortfolioChat } from "@/components/chat/PortfolioChat";
import { Navigation } from "@/components/layout/Navigation";
import { CHAT_PAGE_HEADING } from "@/lib/data/chatbot";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: `Ask ${profile.name}'s portfolio assistant about skills, projects, experience, and contact information.`,
};

export default function ChatPage() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="section-padding min-h-screen bg-surface pt-28 sm:pt-32"
      >
        <div className="container-narrow mx-auto max-w-3xl">
          <Link
            href="/#about"
            className="mb-6 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary-light"
          >
            ← Back to portfolio
          </Link>

          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {CHAT_PAGE_HEADING}
          </h1>
          <p className="mt-3 max-w-2xl text-ink-muted">
            Chat with my portfolio assistant to learn about my resume, skills,
            projects, work experience, education, awards, and how to reach me.
          </p>

          <div className="mt-8">
            <PortfolioChat variant="page" />
          </div>
        </div>
      </main>
    </>
  );
}
