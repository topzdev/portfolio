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

const inputErrorClassName =
  "border-red-400 focus:border-red-500 focus:ring-red-500/20 dark:border-red-500/70";

const fileInputClassName = cn(
  inputClassName,
  "cursor-pointer file:mr-4 file:cursor-pointer file:rounded-lg file:border-0 file:bg-primary/10 file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary hover:file:bg-primary/15",
);

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function validateContactForm(form: HTMLFormElement): FieldErrors {
  const errors: FieldErrors = {};
  const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
  const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

  if (!name) {
    errors.name = "Please enter your name.";
  }

  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!message) {
    errors.message = "Please tell me about your project.";
  }

  return errors;
}

export function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(sectionRef, { selector: "[data-reveal-item]" });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const validationErrors = validateContactForm(form);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setError(null);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(form);
    formData.set("form-name", contactSection.formName);

    try {
      const response = await fetch("/__forms.html", {
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
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    onChange={() =>
                      setFieldErrors((current) => ({ ...current, name: undefined }))
                    }
                    className={cn(
                      inputClassName,
                      fieldErrors.name && inputErrorClassName,
                    )}
                  />
                  {fieldErrors.name ? (
                    <p id="name-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {fieldErrors.name}
                    </p>
                  ) : null}
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
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    onChange={() =>
                      setFieldErrors((current) => ({ ...current, email: undefined }))
                    }
                    className={cn(
                      inputClassName,
                      fieldErrors.email && inputErrorClassName,
                    )}
                  />
                  {fieldErrors.email ? (
                    <p id="email-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {fieldErrors.email}
                    </p>
                  ) : null}
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
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    onChange={() =>
                      setFieldErrors((current) => ({ ...current, message: undefined }))
                    }
                    className={cn(
                      inputClassName,
                      "resize-y",
                      fieldErrors.message && inputErrorClassName,
                    )}
                  />
                  {fieldErrors.message ? (
                    <p id="message-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {fieldErrors.message}
                    </p>
                  ) : null}
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
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-300"
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
