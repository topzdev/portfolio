"use client";

import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { GithubContributions } from "@/components/layout/GithubContributions";
import { FooterIcon, type FooterIconName } from "@/components/icons/FooterIcons";
import { useStaggerReveal } from "@/lib/animations/useStaggerReveal";
import { profile } from "@/lib/data/profile";
import {
  contactLinks,
  footerQuote,
  type FooterQuotePart,
  socialLinks,
} from "@/lib/data/socials";
import { cn } from "@/lib/utils";

const GITHUB_USERNAME =
  socialLinks
    .find((link) => link.platform === "github")
    ?.url.replace(/\/+$/, "")
    .split("/")
    .pop() ?? "topzdev";

const accentClass: Record<NonNullable<FooterQuotePart["accent"]>, string> = {
  yellow: "text-[#ffd600]",
  blue: "text-[#a3e1ff]",
  darkBlue: 'text-[#0993e5]'
};

function FooterLinkItem({
  href,
  label,
  icon,
  external = false,
}: {
  href: string;
  label: string;
  icon: FooterIconName;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      data-footer-icon
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-3 text-[#bdbdbd] transition-colors hover:text-white"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ffd600]/10 text-[#ffd600] transition-colors group-hover:bg-[#ffd600] group-hover:text-[#151e29]">
        <FooterIcon name={icon} className="h-5 w-5" />
      </span>
      <span className="text-base font-light tracking-wide">{label}</span>
    </a>
  );
}

function FooterLinkColumn({
  title,
  children,
  twoColumn = false,
}: {
  title: string;
  children: ReactNode;
  twoColumn?: boolean;
}) {
  return (
    <div>
      <h2 className="mb-6 text-lg font-bold uppercase tracking-wide text-[#dddddd]">
        {title}
      </h2>
      <ul
        className={cn(
          "flex flex-col gap-4",
          twoColumn &&
            "max-h-[300px] flex-wrap gap-x-8 gap-y-4 sm:max-h-none sm:grid sm:grid-cols-2 sm:gap-x-12",
        )}
      >
        {children}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const linksRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(linksRef, { selector: "[data-footer-icon]", stagger: 0.1 });

  return (
    <footer id="footer" className="relative overflow-hidden bg-footer text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-[15%] h-[380px] w-[380px] rounded-full bg-[#0094ff]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-[280px] w-[280px] rounded-full bg-[#fc4040]/10 blur-3xl"
      />

      <div className="container-narrow relative z-[1] px-5 py-20 sm:px-8 lg:px-12">
        <blockquote className="max-w-[60%] text-[1.75rem] font-medium leading-[1.6] sm:text-[2rem] lg:text-[2.125rem]">
          {footerQuote.parts.map((part, index) =>
            part.accent ? (
              <span key={index} className={cn(accentClass[part.accent], part.className)}>
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            ),
          )}
        </blockquote>

        {/* <div className="mt-10">
          <GithubContributions username={GITHUB_USERNAME} />
        </div> */}

        <div ref={linksRef} className="mt-14 flex flex-col gap-16 lg:flex-row lg:gap-20">
          <FooterLinkColumn title="Contacts">
            {contactLinks.map((link) => (
              <li key={link.href} className="list-none">
                <FooterLinkItem
                  href={link.href}
                  label={link.label}
                  icon={link.icon as FooterIconName}
                />
              </li>
            ))}
          </FooterLinkColumn>

          <FooterLinkColumn title="Social Links" twoColumn>
            {socialLinks.map((link) => (
              <li key={link.platform} className="list-none">
                <FooterLinkItem
                  href={link.url}
                  label={link.label}
                  icon={link.icon as FooterIconName}
                  external
                />
              </li>
            ))}
          </FooterLinkColumn>
        </div>

        <p className="mt-24 text-xl text-white/80 sm:mt-28">
          <span className="text-[#ffd600]">Designed</span> and{" "}
          <span className="text-[#a3e1ff]">Developed</span> by{" "}
          <Link
            href="/"
            className="font-bold text-[#0993e5] transition-opacity hover:opacity-80"
          >
            {profile.name}
          </Link>{" "}
          © {year}
        </p>
      </div>
    </footer>
  );
}
