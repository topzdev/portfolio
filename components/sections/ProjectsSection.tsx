"use client";

import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  projects,
  projectsHeadingYears,
  projectsSection,
  splitProjectsTwoColumns,
} from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const { left, right } = splitProjectsTwoColumns(projects);
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

        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:gap-y-20">
          {left.map((project, index) => (
            <div
              key={project.id}
              className="w-full max-w-[420px] mx-auto lg:mx-0 lg:justify-self-start lg:col-start-1"
              style={{ order: index * 2, gridRow: index + 1 }}
            >
              <ProjectCard project={project} column="left" />
            </div>
          ))}

          {right.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "w-full max-w-[420px] mx-auto lg:mx-0 lg:justify-self-end lg:col-start-2 lg:-mt-52 xl:-mt-70",
                index === 0 && "",
              )}
              style={{ order: index * 2 + 1, gridRow: index + 1 }}
            >
              <ProjectCard project={project} column="right" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
