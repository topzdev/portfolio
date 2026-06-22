export type SkillCategory =
  | "ai"
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "design"
  | "styling"
  | "devops"
  | "other";

export type Skill = {
  name: string;
  subtitle?: string;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  url?: string;
  category: SkillCategory;
  /** Inline style from old portfolio (e.g. AI gradient card) */
  cardStyle?: string;
};

export const skillsSection = {
  overline: "Technology",
  title: "My Current Stacks",
};

/**
 * Extracted from components/list/StacksList.vue (branch 2026)
 */
export const skills: Skill[] = [
  {
    name: "AI & LLM",
    subtitle: "ChatGPT, Claude, Gemini & Cursor",
    iconPath: "/icons/ai_f5zcc6",
    iconWidth: 68,
    iconHeight: 68,
    category: "ai",
    cardStyle:
      "background: linear-gradient(180deg, #4A90E2 0%, #50E3C2 100%)",
  },
  {
    name: "React and React Native",
    iconPath: "/icons/icon_react_xnelsh",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://react.dev/",
    category: "frontend",
  },
  {
    name: "NextJs",
    iconPath: "/icons/icon_nextjs_t8gyda",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://nextjs.org/",
    category: "frontend",
  },
  {
    name: "VueJS",
    iconPath: "/icons/icon_vue_jhkfs6",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://vuejs.org/",
    category: "frontend",
  },
  {
    name: "NuxtJs",
    iconPath: "/icons/icon_nuxt_mcbcyd",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://nuxt.com/",
    category: "frontend",
  },
  {
    name: "Expo",
    iconPath: "/icons/icon_expo_wspzok",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://expo.dev/",
    category: "mobile",
  },
  {
    name: "Typescript",
    iconPath: "/icons/icon_typescript_fld2yp",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://www.typescriptlang.org/",
    category: "frontend",
  },
  {
    name: "Javascript",
    iconPath: "/icons/icon_javascript_dfxxqk",
    iconWidth: 68,
    iconHeight: 68,
    category: "frontend",
  },
  {
    name: "JQuery",
    iconPath: "/icons/icon_jquery_rp7qwu",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://jquery.com/",
    category: "frontend",
  },
  {
    name: "NodeJS",
    iconPath: "/icons/icon_nodejs_rii0or",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://nodejs.org/en",
    category: "backend",
  },
  {
    name: "AdonisJS",
    iconPath: "/icons/adonis_jdvxsq",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://adonisjs.com/",
    category: "backend",
  },
  {
    name: "PHP",
    iconPath: "/icons/icon_php_xouhs3",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://www.php.net/",
    category: "backend",
  },
  {
    name: "Laravel",
    iconPath: "/icons/icon_laravel_xtmrqn",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://laravel.com/",
    category: "backend",
  },
  {
    name: "PostgreSQL",
    iconPath: "/icons/icon_postgresql_yg7kxl",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://www.postgresql.org/",
    category: "database",
  },
  {
    name: "TailwindCSS",
    iconPath: "/icons/icon_tailwind-css_iw8ufr",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://tailwindcss.com/",
    category: "styling",
  },
  {
    name: "Shadcn UI",
    iconPath: "/icons/shadcn-ui_ycf2n3",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://ui.shadcn.com/",
    category: "frontend",
  },
  {
    name: "Docker",
    iconPath: "/icons/docker_vnzxw4",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://www.docker.com/",
    category: "devops",
  },
  {
    name: "Figma",
    iconPath: "/icons/icon_figma_qijjss",
    iconWidth: 45,
    iconHeight: 68,
    url: "https://www.figma.com/",
    category: "design",
  },
  {
    name: "HTML",
    iconPath: "/icons/icon_html_iatcnq",
    iconWidth: 68,
    iconHeight: 68,
    category: "frontend",
  },
  {
    name: "CSS",
    iconPath: "/icons/icon_css_pnlbyb",
    iconWidth: 68,
    iconHeight: 68,
    category: "styling",
  },
  {
    name: "SCSS",
    iconPath: "/icons/icon_sass_pbvayy",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://sass-lang.com/",
    category: "styling",
  },
];

export const skillsByCategory = (category: SkillCategory): Skill[] =>
  skills.filter((s) => s.category === category);

/** Groups skills into vertical columns (3 per column → 7 columns). */
export function getSkillsColumns(itemsPerColumn = 3): Skill[][] {
  const columns: Skill[][] = [];

  for (let index = 0; index < skills.length; index += itemsPerColumn) {
    columns.push(skills.slice(index, index + itemsPerColumn));
  }

  return columns;
}
