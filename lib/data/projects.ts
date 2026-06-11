export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectLogo = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  logo: ProjectLogo;
  image: ProjectImage;
  featured: boolean;
};

/**
 * Extracted from components/list/ProjectList.vue
 * Descriptions and tech stacks are placeholders — confirm before publish.
 */
export const projects: Project[] = [
  {
    id: "project-1",
    title: "Shareitineray",
    description:
      "[TODO] Add project description — travel itinerary sharing platform.",
    techStack: [],
    liveUrl: "https://shareitinerary.com/",
    logo: {
      src: "/logo/shareitinerary_logo_m4zqlq",
      width: 213,
      height: 50,
    },
    image: {
      src: "/projects/all/proj_sharetinerary_x0cqjn",
      alt: "Shareitineray project screenshot",
    },
    featured: true,
  },
  {
    id: "project-2",
    title: "Knovie",
    description: "[TODO] Add project description.",
    techStack: [],
    liveUrl: "https://knowvie.herokuapp.com/",
    logo: {
      src: "/logo/knowvie_logo_v1wb6a",
      width: 47,
      height: 50,
    },
    image: {
      src: "/projects/all/proj_knowvie_hi2qyh",
      alt: "Knovie project screenshot",
    },
    featured: true,
  },
  {
    id: "project-3",
    title: "PC Master Shop",
    description: "[TODO] Add project description — e-commerce project.",
    techStack: [],
    liveUrl: "http://pcmastershop.herokuapp.com/",
    logo: {
      src: "/logo/pcmaster_logo_ud6tcm",
      width: 175,
      height: 50,
    },
    image: {
      src: "/projects/all/proj_pcmaster_f0xrlx",
      alt: "PC Master Shop project screenshot",
    },
    featured: true,
  },
  {
    id: "project-4",
    title: "Brocode",
    description: "[TODO] Add project description. No live URL in old portfolio.",
    techStack: [],
    logo: {
      src: "/logo/brocode_logo_x3wynw",
      width: 259,
      height: 50,
    },
    image: {
      src: "/projects/all/proj_brocode_q6fknk",
      alt: "Brocode project screenshot",
    },
    featured: true,
  },
  {
    id: "project-5",
    title: "Luzon TSC",
    description: "[TODO] Add project description.",
    techStack: [],
    liveUrl: "https://luzontsc.com/",
    logo: {
      src: "/logo/tsc_logo_t2o9pc",
      width: 53,
      height: 50,
    },
    image: {
      src: "/projects/all/proj_tsc_ggaleu",
      alt: "Luzon TSC project screenshot",
    },
    featured: true,
  },
];

export const projectsSection = {
  overline: "Projects",
  tagline: "Believes in perfection by design and performance by default",
  githubUrl: "https://github.com/topzdev",
  githubLabel: "Visit my github",
  /** Dynamic heading uses startYear to calculate years of work */
  startYear: 2017,
  headingTemplate: (years: number) =>
    `Here are some of my work for the past ${years} years`,
};

export function projectsHeadingYears(
  startYear: number = projectsSection.startYear,
  now: Date = new Date(),
): number {
  return now.getFullYear() - startYear;
}
