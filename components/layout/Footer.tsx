import Link from "next/link";
import { profile } from "@/lib/data/profile";
import {
  contactLinks,
  footerQuote,
  socialLinks,
} from "@/lib/data/socials";

const highlightClass = "text-primary-light";

function renderQuote() {
  const parts = footerQuote.text.split(
    new RegExp(`(${footerQuote.highlights.join("|")})`, "g"),
  );

  return parts.map((part, index) =>
    footerQuote.highlights.includes(
      part as (typeof footerQuote.highlights)[number],
    ) ? (
      <span key={index} className={highlightClass}>
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-footer text-white">
      <div className="container-narrow section-padding">
        <blockquote className="max-w-3xl text-2xl font-medium leading-relaxed text-white/90 sm:text-3xl">
          {renderQuote()}
        </blockquote>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Contacts
            </h2>
            <ul className="space-y-3">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
              Social Links
            </h2>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm leading-relaxed text-white/60">
              <span className="text-primary-light">Designed</span> and{" "}
              <span className="text-primary-light">Developed</span> by{" "}
              <Link href="/" className="font-medium text-white hover:underline">
                {profile.name}
              </Link>{" "}
              © {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
