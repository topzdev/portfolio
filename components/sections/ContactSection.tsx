"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useStaggerReveal } from "@/lib/animations/useStaggerReveal";
import { profile } from "@/lib/data/profile";
import { contactSection } from "@/lib/data/socials";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  useStaggerReveal(formRef, { selector: "[data-reveal-item]" });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              title={contactSection.title}
              subtitle={contactSection.subtitle}
            />
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold text-ink">
              {contactSection.formTitle}
            </h3>

            {submitted ? (
              <p
                data-reveal-item
                className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-ink-muted"
              >
                Your email client should open shortly. If it doesn&apos;t,
                reach me directly at{" "}
                <a
                  href={`mailto:${profile.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {profile.email}
                </a>
                .
              </p>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <div data-reveal-item>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    What&apos;s your name?
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div data-reveal-item>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Your email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div data-reveal-item>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Tell me about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div data-reveal-item>
                  <Button type="submit" className="w-full sm:w-auto">
                    Send it!
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
