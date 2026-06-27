"use client";

import { Fragment, type ReactNode } from "react";
import {
  isExternalHref,
  parseSectionHref,
} from "@/lib/chat/navigateToSection";

type InlineToken =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "link"; label: string; href: string };

function tokenizeInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  const pattern = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }

    if (match[1] !== undefined) {
      tokens.push({ type: "bold", value: match[1] });
    } else {
      tokens.push({ type: "link", label: match[2], href: match[3] });
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }

  return tokens;
}

function SectionLink({
  label,
  sectionId,
  onNavigate,
}: {
  label: string;
  sectionId: string;
  onNavigate?: (sectionId: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onNavigate?.(sectionId)}
      className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary-light hover:decoration-primary"
    >
      {label}
    </button>
  );
}

function renderInline(
  text: string,
  keyPrefix: string,
  onSectionNavigate?: (sectionId: string) => void,
): ReactNode[] {
  const tokens = tokenizeInline(text);

  if (tokens.length === 0) {
    return [text];
  }

  return tokens.map((token, index) => {
    const key = `${keyPrefix}-${index}`;

    if (token.type === "text") {
      return <Fragment key={key}>{token.value}</Fragment>;
    }

    if (token.type === "bold") {
      return (
        <strong key={key} className="font-semibold text-ink">
          {token.value}
        </strong>
      );
    }

    const sectionId = parseSectionHref(token.href);
    if (sectionId && onSectionNavigate) {
      return (
        <SectionLink
          key={key}
          label={token.label}
          sectionId={sectionId}
          onNavigate={onSectionNavigate}
        />
      );
    }

    if (isExternalHref(token.href)) {
      return (
        <a
          key={key}
          href={token.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary-light hover:decoration-primary"
        >
          {token.label}
        </a>
      );
    }

    return (
      <a
        key={key}
        href={token.href}
        className="font-medium text-primary underline decoration-primary/40 underline-offset-2 transition-colors hover:text-primary-light hover:decoration-primary"
      >
        {token.label}
      </a>
    );
  });
}

function TypingCaret() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[1em] w-0.5 animate-pulse bg-primary align-text-bottom"
    />
  );
}

type Block =
  | { type: "list"; items: string[] }
  | { type: "paragraph"; text: string };

function parseBlocks(text: string): Block[] {
  const lines = text.split("\n");
  const blocks: Block[] = [];
  let listItems: string[] = [];
  let paragraphLines: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: "list", items: listItems });
      listItems = [];
    }
  };

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      blocks.push({ type: "paragraph", text: paragraphLines.join("\n") });
      paragraphLines = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const listMatch = /^\s*[-*]\s+(.*)$/.exec(line);

    if (listMatch) {
      flushParagraph();
      listItems.push(listMatch[1]);
      continue;
    }

    if (line.trim() === "") {
      flushList();
      flushParagraph();
      continue;
    }

    flushList();
    paragraphLines.push(line);
  }

  flushList();
  flushParagraph();

  return blocks;
}

export function FormattedMessage({
  content,
  showCaret = false,
  onSectionNavigate,
}: {
  content: string;
  showCaret?: boolean;
  onSectionNavigate?: (sectionId: string) => void;
}) {
  const blocks = parseBlocks(content);
  const lastBlockIndex = blocks.length - 1;

  if (blocks.length === 0) {
    return showCaret ? (
      <p className="whitespace-pre-wrap">
        <TypingCaret />
      </p>
    ) : null;
  }

  return (
    <div className="space-y-2">
      {blocks.map((block, blockIndex) => {
        const isLast = blockIndex === lastBlockIndex;

        if (block.type === "list") {
          return (
            <ul
              key={`block-${blockIndex}`}
              className="list-disc space-y-1 pl-4 marker:text-primary"
            >
              {block.items.map((item, itemIndex) => {
                const isLastItem = isLast && itemIndex === block.items.length - 1;

                return (
                  <li key={`li-${blockIndex}-${itemIndex}`}>
                    {renderInline(
                      item,
                      `li-${blockIndex}-${itemIndex}`,
                      onSectionNavigate,
                    )}
                    {isLastItem && showCaret ? <TypingCaret /> : null}
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <p key={`block-${blockIndex}`} className="whitespace-pre-wrap">
            {renderInline(block.text, `p-${blockIndex}`, onSectionNavigate)}
            {isLast && showCaret ? <TypingCaret /> : null}
          </p>
        );
      })}
    </div>
  );
}
