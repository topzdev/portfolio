import { aboutSection, profile } from "@/lib/data/profile";
import {
  displayedProjects,
  projects,
  projectsSection,
} from "@/lib/data/projects";
import { skills, skillsSection } from "@/lib/data/skills";
import {
  contactLinks,
  contactSection,
  footerQuote,
  socialLinks,
  testimonials,
  testimonialsSection,
} from "@/lib/data/socials";

/** In-page section anchors on topz.dev — used by the chat assistant for navigation links. */
export const WEBSITE_SECTIONS = [
  {
    id: "hero",
    label: "Hero",
    description: "Introduction, name, title, and status bubble",
  },
  {
    id: "about",
    label: "About",
    description: "Bio, introduction, and resume download",
  },
  {
    id: "skills",
    label: "Skills",
    description: "Technology stacks and tools Christian uses",
  },
  {
    id: "projects",
    label: "Projects",
    description: "Featured portfolio projects with live demos",
  },
  {
    id: "testimonials",
    label: "Testimonials",
    description: "Recommendations from colleagues and clients",
  },
  {
    id: "contact",
    label: "Contact form",
    description: "Project inquiry form to send a message",
  },
  {
    id: "footer",
    label: "Footer / Contact links",
    description: "Phone, email, and social media links",
  },
] as const;

export type WebsiteSectionId = (typeof WEBSITE_SECTIONS)[number]["id"];

const footerQuoteText = footerQuote.parts.map((part) => part.text).join("");

function formatSkillsList(): string {
  return skills
    .map((skill) => (skill.subtitle ? `${skill.name} (${skill.subtitle})` : skill.name))
    .join(", ");
}

function formatProjectsList(projectList = displayedProjects()): string {
  return projectList
    .map((project) => {
      const url = project.liveUrl ? ` — ${project.liveUrl}` : "";
      const desc =
        project.description && !project.description.startsWith("[TODO]")
          ? `: ${project.description}`
          : "";
      return `- ${project.title}${desc}${url}`;
    })
    .join("\n");
}

function formatTestimonialsList(): string {
  return testimonials
    .map(
      (item) =>
        `- ${item.name} (${item.position}): "${item.quote.trim()}"`,
    )
    .join("\n");
}

function formatContactLinks(): string {
  const contacts = contactLinks
    .map((link) => `- ${link.label}: ${link.href}`)
    .join("\n");
  const socials = socialLinks
    .map((link) => `- ${link.label}: ${link.url}`)
    .join("\n");
  return `Contacts:\n${contacts}\n\nSocial links:\n${socials}`;
}

/** Website content scraped from portfolio data files (single source of truth with the live site). */
export function buildWebsiteContext(): string {
  const years = new Date().getFullYear() - projectsSection.startYear;

  return `
WEBSITE CONTENT (topz.dev — live portfolio pages):

Site URL: ${profile.seo.url}
SEO title: ${profile.seo.title}
SEO description: ${profile.seo.description}

Page structure (top to bottom):
${WEBSITE_SECTIONS.map(
  (section) =>
    `- #${section.id} — ${section.label}: ${section.description}`,
).join("\n")}

Hero (#hero):
- Headline: ${profile.headline}
- Title: ${profile.title}
- Rotating titles: ${profile.rotatingTitles.join(", ")}
- Status messages: ${profile.statusBubble.messages.join("; ")}

About (#about):
- Section title: ${aboutSection.title}
- Bio: ${profile.bio.trim()}
- Resume: ${profile.resumeUrl}

Skills (#skills):
- Section: ${skillsSection.overline} — ${skillsSection.title}
- Technologies on site: ${formatSkillsList()}

Projects (#projects):
- Section: ${projectsSection.overline} — ${projectsSection.tagline}
- Heading: ${projectsSection.headingTemplate(years)}
- GitHub: ${projectsSection.githubLabel} — ${projectsSection.githubUrl}
- Featured projects on site:
${formatProjectsList()}
- All projects in data (${projects.length} total): ${projects.map((p) => p.title).join(", ")}

Testimonials (#testimonials):
- Section: ${testimonialsSection.overline} — ${testimonialsSection.title}
${formatTestimonialsList()}

Contact form (#contact):
- Title: ${contactSection.title}
- Subtitle: ${contactSection.subtitle}
- Form heading: ${contactSection.formTitle}
- CTA: ${contactSection.hireMeCta}
- Supports optional file attachment (PDF, images, documents up to 10MB)

Footer (#footer):
- Quote: "${footerQuoteText}"
${formatContactLinks()}
`.trim();
}

export const WEBSITE_CHAT_CONTEXT = buildWebsiteContext();

export const WEBSITE_NAVIGATION_CONTEXT = `
WEBSITE NAVIGATION (for chat replies):
When the visitor asks about content that appears on the portfolio website, answer using the website/resume context AND include a clickable section link so they can jump to that part of the site.

Use Markdown links with hash anchors only for in-page navigation:
- Contact info, phone, email, social links → [View contact details](#footer)
- Send a message / hire / project inquiry form → [Open contact form](#contact)
- Testimonials, recommendations, what people say → [View testimonials](#testimonials)
- Skills, tech stack, tools → [View skills section](#skills)
- Projects, portfolio work, demos → [View projects](#projects)
- About, bio, introduction → [View about section](#about)
- Hero, introduction banner → [View hero section](#hero)

Rules for section links:
- Use exactly these anchor IDs: hero, about, skills, projects, testimonials, contact, footer
- Format: [descriptive label](#section-id) — e.g. [View contact details](#footer)
- Prefer footer (#footer) for contact/phone/email/social questions; use #contact when they want to send a message
- Include at most one section link per reply unless the question clearly spans two sections
- For external URLs (GitHub, LinkedIn, live demos), use normal links: [GitHub](https://github.com/topzdev)
`.trim();
