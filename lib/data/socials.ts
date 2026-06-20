export type ContactLink = {
  type: "phone" | "email";
  label: string;
  href: string;
  icon: string;
};

export type SocialLink = {
  platform: string;
  label: string;
  url: string;
  icon: string;
};

/** Active links from components/footer/MainFooter.vue */
export const contactLinks: ContactLink[] = [
  {
    type: "phone",
    label: "09286665903",
    href: "tel:09286665903",
    icon: "PhoneIcon",
  },
  {
    type: "email",
    label: "christianlugod05@gmail.com",
    href: "mailto:christianlugod05@gmail.com",
    icon: "EmailIcon",
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    label: "Github",
    url: "https://github.com/topzdev",
    icon: "GithubIcon",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/christianlugod15/",
    icon: "LinkedInIcon",
  },
  {
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/_christopz",
    icon: "InstagramIcon",
  },
 
  {
    platform: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/Christoplugod",
    icon: "FacebookIcon",
  },
];

/**
 * Icon components exist but are not wired in the current footer.
 * Confirm before adding to rebuild.
 */
export const legacySocialLinks: SocialLink[] = [
  {
    platform: "upwork",
    label: "Upwork",
    url: "https://www.upwork.com/freelancers/~0183563188426b2c0c",
    icon: "UpworkIcon",
  },
  {
    platform: "dribbble",
    label: "Dribbble",
    url: "https://dribbble.com/TopzTheDev",
    icon: "DribbleIcon",
  },
  {
    platform: "twitter",
    label: "Twitter",
    url: "https://twitter.com/_christop_",
    icon: "TwitterIcon",
  },
];

export type FooterQuotePart = {
  text: string;
  accent?: "yellow" | "blue" | "darkBlue";
  className?: string;
};

export const footerQuote = {
  parts: [
    { text: "Always " },
    { text: "learning", accent: "yellow", className: "font-semibold" },
    { text: ". Always " },
    { text: "building", accent: "blue", className: "font-semibold" },
    { text: ". Always " },
    { text: "moving forward", accent: "darkBlue", className: "italic font-bold" },
    { text: "." },
  ] satisfies FooterQuotePart[],
};

export const contactSection = {
  id: "contact",
  title: "Got a project? Hmmm... Let's Talk",
  subtitle: "Don't hesitate, lets talk about your idea and make it happen.",
  formTitle: "Estimate your project? Let me know here.",
  hireMeCta: "Hire Me",
};

export const testimonialsSection = {
  overline: "testimony",
  title: "People I've worked with have said some nice things...",
};

export type Testimonial = {
  name: string;
  position: string;
  quote: string;
  imagePath: string | null;
};

export const testimonials: Testimonial[] = [
  {
    name: "Miko Suarez",
    position: "COO of Webdev200",
    quote:
      "Christian is not only great for design and development, he is a problem solver who always delivers an exceptional quality of work. Highly recommended",
    imagePath: "/profiles/miko_suarez_vgxzkv",
  },
  {
    name: "Aldrin Plata",
    position: "OM of Webdev200",
    quote:
      "I've worked with Christian on several projects and am always impressed by his dedication and problem-solving skills. He's a true professional and creative asset.",
 
    imagePath: null,
  },
  {
    name: "Sebastian Lavarias",
    position: "Senior Fullstack Developer",
    quote:
      "Christian is a great friend and collaborator. We’ve worked on projects together and he always brings energy, ideas, and support. I highly recommend him.",
 
    imagePath: '/profiles/basti_laravarias_vj96kd',
  },
 
];
