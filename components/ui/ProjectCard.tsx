import Image from "next/image";
import Link from "next/link";
import { cloudinaryUrl } from "@/lib/data/profile";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const imageUrl = cloudinaryUrl(project.image.src);
  const logoUrl = cloudinaryUrl(project.logo.src);
  const isPlaceholder = project.description.startsWith("[TODO]");

  const cardContent = (
    <article
      data-reveal-item
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface-elevated transition-shadow hover:shadow-lg",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={imageUrl}
          alt={project.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-4">
          <Image
            src={logoUrl}
            alt={`${project.title} logo`}
            width={project.logo.width}
            height={project.logo.height}
            className="h-8 w-auto max-w-[140px] object-contain object-left"
          />
          {project.liveUrl && (
            <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              View live →
            </span>
          )}
        </div>

        <div>
          <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            {isPlaceholder
              ? "Project description coming soon."
              : project.description}
          </p>
        </div>

        {project.techStack.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-surface px-3 py-1 text-xs text-ink-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );

  if (project.liveUrl) {
    return (
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
        aria-label={`View ${project.title} live demo`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
