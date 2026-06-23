"use client";

import Link from "next/link";
import { useRef } from "react";
import { CloudinaryImage } from "@/components/ui/CloudinaryImage";
import {
  useProjectCardReveal,
  type ProjectCardColumn,
} from "@/lib/animations/useProjectCardReveal";
import { cloudinaryUrl } from "@/lib/data/profile";
import type { Project } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  column: ProjectCardColumn;
  className?: string;
};

export function ProjectCard({ project, column, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  useProjectCardReveal(cardRef, column);

  const imageUrl = cloudinaryUrl(project.image.src);
  const logoUrl = cloudinaryUrl(project.logo.src);

  const cardContent = (
    <article
      ref={cardRef}
      className={cn(
        "group relative aspect-[485/580] w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-xl transition-shadow hover:shadow-2xl dark:bg-white/60",
        className,
      )}
    >
     <div className="relative w-full h-full -bottom-20 left-10">
     <CloudinaryImage
        src={imageUrl}
        alt={project.image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 420px"
        className="object-contain object-top scale-110  duration-500 -rotate-10"
      />
     </div>

      <div className="absolute inset-0" aria-hidden />

      <div className="absolute top-6 left-6 z-10">
        <CloudinaryImage
          src={logoUrl}
          alt={`${project.title} logo`}
          width={project.logo.width}
          height={project.logo.height}
          className="h-10 w-auto max-w-[160px] object-contain object-left drop-shadow-sm "
        />
      </div>
    </article>
  );

  if (project.liveUrl) {
    return (
      <Link
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
        aria-label={`View ${project.title} live demo`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
