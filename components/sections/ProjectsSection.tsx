"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useStaggerReveal } from "@/lib/animations/useStaggerReveal";
import {
  projects,
  projectsHeadingYears,
  projectsSection,
} from "@/lib/data/projects";

export function ProjectsSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  useStaggerReveal(gridRef);

  const years = projectsHeadingYears();
  const heading = projectsSection.headingTemplate(years);

  return (
    <section id="projects" className="section-padding bg-surface-elevated">
      <div className="container-narrow">
        <SectionHeading
          overline={projectsSection.overline}
          title={heading}
          subtitle={projectsSection.tagline}
        />

        <div className="mb-10">
          <Button href={projectsSection.githubUrl} variant="secondary">
            {projectsSection.githubLabel}
          </Button>
        </div>

        <div
          ref={gridRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
