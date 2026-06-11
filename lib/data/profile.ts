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
  bio: `Hello! My name is Christian Lugod, and I'm currently a full-stack web developer working in the capital city of Manila, Philippines. I graduated from the Technological University of the Philippines with a degree in Information Technology. I am extremely passionate about this profession, and my dedication reflects in my skills and experience in the field. This passion also fuels my lifelong commitment to continuously enhance my web and mobile application development skills`,
  location: "Manila, Philippines",
  email: "christianlugod05@gmail.com",
  phone: "09286665903",
  resumeUrl: "/christian-lugod-resume.pdf",
  avatarPath: "/me_prsc2l",
  heroImagePath: "/topzdev-memoji",
  rotatingTitles: [
    "UI/UX Designer",
    "Backend Developer",
    "Frontend Developer",
    "SEO Specialist",
    "Fullstack Developer",
  ],
  seo: {
    title: "TopzDev - Christian Lugod Portfolio",
    description:
      "UI/UX Designer, SEO Specialist, Backend, Frontend, Fullstack Web Developer from Manila, Philippines",
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
