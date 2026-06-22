"use client";

import { FormEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useStaggerReveal } from "@/lib/animations/useStaggerReveal";
import { profile } from "@/lib/data/profile";
import { contactSection } from "@/lib/data/socials";
import { cn } from "@/lib/utils";

const inputClassName =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-ink outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20";

const fileInputClassName = cn(
  inputClassName,
  "cursor-pointer file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/15",
);

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(sectionRef, { selector: "[data-reveal-item]" });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form-name", contactSection.formName);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError(contactSection.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        <div
          ref={sectionRef}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <div data-reveal-item>
            <SectionHeading
              title={contactSection.title}
              subtitle={contactSection.subtitle}
            />
          </div>

          <div>
            <h3
              data-reveal-item
              className="mb-6 text-xl font-semibold text-ink"
            >
              {contactSection.formTitle}
            </h3>

            {submitted ? (
              <p
                data-reveal-item
                className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-ink-muted"
              >
                {contactSection.successMessage}
              </p>
            ) : (
              <form
                name={contactSection.formName}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
                className="space-y-5"
                noValidate
              >
                <input
                  type="hidden"
                  name="form-name"
                  value={contactSection.formName}
                />

                <p className="hidden" aria-hidden>
                  <label>
                    Don&apos;t fill this out:
                    <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>

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
                    disabled={isSubmitting}
                    className={inputClassName}
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
                    disabled={isSubmitting}
                    className={inputClassName}
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
                    disabled={isSubmitting}
                    className={cn(inputClassName, "resize-y")}
                  />
                </div>

                <div data-reveal-item>
                  <label
                    htmlFor="attachment"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    {contactSection.fileLabel}
                  </label>
                  <input
                    id="attachment"
                    name="attachment"
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.gif,.webp,.zip"
                    disabled={isSubmitting}
                    className={fileInputClassName}
                  />
                  <p className="mt-2 text-sm text-ink-muted">
                    {contactSection.fileHint}
                  </p>
                </div>

                {error && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {error}{" "}
                    <a
                      href={`mailto:${profile.email}`}
                      className="font-medium underline"
                    >
                      {profile.email}
                    </a>
                  </p>
                )}

                <div data-reveal-item>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send it!"}
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
