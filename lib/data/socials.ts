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
    platform: "upwork",
    label: "Hire me at Upwork",
    url: "https://www.upwork.com/freelancers/~0183563188426b2c0c",
    icon: "UpworkIcon",
  },
  {
    platform: "github",
    label: "Github",
    url: "https://github.com/topzdev",
    icon: "GithubIcon",
  },
  {
    platform: "dribbble",
    label: "Dribbble",
    url: "https://dribbble.com/TopzTheDev",
    icon: "DribbleIcon",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/christopher-lugod-ba146b197/",
    icon: "LinkedInIcon",
  },
  {
    platform: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/Christoplugod",
    icon: "FacebookIcon",
  },
  {
    platform: "twitter",
    label: "Twitter",
    url: "https://twitter.com/_christop_",
    icon: "TwitterIcon",
  },
  {
    platform: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/christoplugod/",
    icon: "InstagramIcon",
  },
];

export const footerQuote = {
  text: "Never stop learning, Never give up your dream. We don't just come here to lose, Keep fighting for your dreams.",
  highlights: ["Never", "dream", "fighting"] as const,
};

export const contactSection = {
  id: "hireme",
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
  imagePath: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Miko Suarez",
    position: "Project Manager",
    quote:
      "Christian is not only great for design and development, he is a problem solver who always delivers an exceptional quality of work. Highly recommended",
    imagePath: "/profiles/client_sir_miko_wrknfx",
  },
];
