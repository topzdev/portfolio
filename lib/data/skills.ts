export type SkillCategory =
  | "frontend"
  | "backend"
  | "mobile"
  | "database"
  | "design"
  | "styling"
  | "other";

export type Skill = {
  name: string;
  iconPath: string;
  iconWidth: number;
  iconHeight: number;
  url?: string;
  category: SkillCategory;
};

export const skillsSection = {
  overline: "Technology",
  title: "My Current Stacks",
};

/**
 * Extracted from components/list/StacksList.vue
 * Review list for rebuild — jQuery/Bootstrap may be de-emphasized.
 */
export const skills: Skill[] = [
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
    name: "Expo",
    iconPath: "/icons/icon_expo_wspzok",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://expo.dev/",
    category: "mobile",
  },
  {
    name: "Javascript",
    iconPath: "/icons/icon_javascript_dfxxqk",
    iconWidth: 68,
    iconHeight: 68,
    category: "frontend",
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
    name: "JQuery",
    iconPath: "/icons/icon_jquery_rp7qwu",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://jquery.com/",
    category: "frontend",
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
    name: "NodeJS",
    iconPath: "/icons/icon_nodejs_rii0or",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://nodejs.org/en",
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
  {
    name: "TailwindCSS",
    iconPath: "/icons/icon_tailwind-css_iw8ufr",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://tailwindcss.com/",
    category: "styling",
  },
  {
    name: "Vuetify",
    iconPath: "/icons/icon_vuetify_nkvejh",
    iconWidth: 68,
    iconHeight: 59,
    url: "https://vuetifyjs.com/",
    category: "frontend",
  },
  {
    name: "MUI",
    iconPath: "/icons/icon_mui_nsfsz2",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://mui.com/",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    iconPath: "/icons/icon_bootstrap_truxzr",
    iconWidth: 68,
    iconHeight: 68,
    url: "https://getbootstrap.com/",
    category: "styling",
  },
];

export const skillsByCategory = (category: SkillCategory): Skill[] =>
  skills.filter((s) => s.category === category);
