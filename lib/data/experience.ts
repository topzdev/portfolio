export type ExperienceType = "work" | "education";

export type Experience = {
  id: string;
  type: ExperienceType;
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate?: string;
  description?: string;
};

/**
 * The old portfolio had no dedicated experience section.
 * Education is inferred from the Introduction section.
 * Work history entries are placeholders — add real roles before publish.
 */
export const experience: Experience[] = [
  {
    id: "education-tup",
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "Technological University of the Philippines",
    location: "Manila, Philippines",
    startDate: "[TODO: start year]",
    endDate: "[TODO: graduation year]",
    description:
      "Mentioned in about section. Add graduation year and honors if applicable.",
  },
  {
    id: "work-placeholder-1",
    type: "work",
    title: "[TODO: Job title]",
    organization: "[TODO: Company name]",
    location: "Manila, Philippines",
    startDate: "[TODO: YYYY-MM]",
    endDate: undefined,
    description: "[TODO: Role summary and key achievements]",
  },
];

export const experienceSection = {
  overline: "Experience",
  title: "Where I've worked and studied",
};
