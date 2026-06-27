export type ProfileSeo = {
  title: string;
  description: string;
  ogTitle: string;
  ogImage: string;
  url: string;
  themeColor: string;
  twitterHandle: string;
};

export type Profile = {
  name: string;
  alias: string;
  title: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  avatarPath: string;
  heroImagePath: string;
  rotatingTitles: string[];
  statusBubble: {
    messages: string[];
    intervalMs: number;
    initialDelayMs: number;
  };
  seo: ProfileSeo;
};

/** Cloudinary base — prefix paths when building image URLs */
export const CLOUDINARY_BASE =
  "https://res.cloudinary.com/topzdev/image/upload/portfolio";

export const profile: Profile = {
  name: "Christian Lugod",
  alias: "TopzDev",
  title: "Fullstack Developer",
  headline: "Hello, I'm Christian Lugod",
  bio: `Hello! My name is Christian Lugod, and I’m a Full Stack Web Developer based in Mandaluyong, Metro Manila, Philippines. I graduated from the Technological University of the Philippines with a degree in Information Technology. I’m passionate about building web and mobile applications, and that passion is reflected in the skills and experience I’ve gained throughout my career. It also drives my commitment to continuous learning and improving my craft as a developer.`,
  location: "Mandaluyong, Metro Manila, Philippines",
  email: "christianlugod05@gmail.com",
  phone: "09286665903",
  resumeUrl: "/christian_lugod_resume.pdf",
  avatarPath: "/me_prsc2l",
  heroImagePath: "/topzdev-memoji",
  rotatingTitles: [
    "Frontend Developer",
    "Backend Developer",
    "SEO Specialist",
    "UI/UX Designer",
    "Fullstack Developer",
  ],
  statusBubble: {
    messages: [
      "Expanding my skills in AI/ML🤖",
      "Open to new opportunities🚀",
    ],
    intervalMs: 10000,
    initialDelayMs: 2800,
  },
  seo: {
    title: "TopzDev - Christian Lugod Portfolio",
    description:
      "UI/UX Designer, SEO Specialist, Backend, Frontend, Fullstack Web Developer from Mandaluyong, Metro Manila, Philippines",
    ogTitle: "Christian Lugod | Portfolio",
    ogImage: "/seo-cover.jpg",
    url: "https://topz.dev",
    themeColor: "#0993e5",
    twitterHandle: "_christop_",
  },
};

export const aboutSection = {
  overline: "Introduction",
  title: "Know more about me",
  resumeLabel: "Download my Resume",
};

export function cloudinaryUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${CLOUDINARY_BASE}/${normalized}`;
}

export function heroImageUrl(): string {
  return cloudinaryUrl(profile.heroImagePath);
}

export function avatarUrl(): string {
  return cloudinaryUrl(profile.avatarPath);
}
