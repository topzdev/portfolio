import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  overline,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative mb-12 max-w-2xl z-20",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {overline && (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-ink-subtle">
          {overline}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.5rem] md:leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">{subtitle}</p>
      )}
    </div>
  );
}
