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
  /** Whether the old Nuxt UI rendered this project (only 5 of 7 were shown) */
  displayedInOldUi: boolean;
};

/**
 * Extracted from components/list/ProjectList.vue
 * Descriptions and tech stacks are placeholders — confirm before publish.
 */
export const projects: Project[] = [
  {
    id: "project-2",
    title: "Linktree Clone",
    description: "[TODO] Add project description.",
    techStack: [],
    liveUrl: "https://linktree-clone-topzdev.vercel.app/",
    logo: {
      src: "/logo/linktree_gwkwvu",
      width: 353,
      height: 142,
    },
    image: {
      src: "/projects/all/linktree-clone_ktfxzc",
      alt: "Linktree Clone project screenshot",
    },
    featured: true,
    displayedInOldUi: true,
  },
  {
    id: "project-3",
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
    displayedInOldUi: true,
  },
  {
    id: "project-1",
    title: "HomeOfDevs",
    description: "[TODO] Add project description.",
    techStack: [],
    liveUrl: "https://homeofdevs.com/",
    logo: {
      src: "/logo/homeofdevs_qpa2gr",
      width: 572,
      height: 100,
    },
    image: {
      src: "/projects/all/homeofdevs_qqgfbk",
      alt: "HomeOfDevs project screenshot",
    },
    featured: true,
    displayedInOldUi: true,
  },
  {
    id: "project-4",
    title: "Knovie",
    description: "[TODO] Add project description.",
    techStack: [],
    liveUrl: "https://knovieapp.topz.dev/",
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
    displayedInOldUi: true,
  },
  {
    id: "project-5",
    title: "PC Master Shop",
    description: "[TODO] Add project description — e-commerce project.",
    techStack: [],
    liveUrl: "https://pcmastershop.vercel.app/",
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
    displayedInOldUi: true,
  },
  {
    id: "project-6",
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
    featured: false,
    displayedInOldUi: false,
  },
  {
    id: "project-7",
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
    featured: false,
    displayedInOldUi: false,
  },
];

export const projectsSection = {
  overline: "Projects",
  tagline: "Believes in perfection by design and performance by default",
  githubUrl: "https://github.com/topzdev",
  githubLabel: "Visit my github",
  /** Old site calculated years from 2018 */
  startYear: 2018,
  headingTemplate: (years: number) =>
    `Here are some of my work for the past ${years} years`,
};

export function projectsHeadingYears(
  startYear: number = projectsSection.startYear,
  now: Date = new Date(),
): number {
  return now.getFullYear() - startYear;
}

export const displayedProjects = (): Project[] =>
  projects.filter((p) => p.displayedInOldUi);

/** Alternating split: left = even indices, right = odd indices */
export function splitProjectsTwoColumns(projectList: Project[] = projects): {
  left: Project[];
  right: Project[];
} {
  const left = projectList.filter((_, i) => i % 2 === 1);
  const right = projectList.filter((_, i) => i % 2 === 0);
  return { left, right };
}
