import {
  WEBSITE_CHAT_CONTEXT,
  WEBSITE_NAVIGATION_CONTEXT,
} from "@/lib/data/websiteContext";

export const CHAT_WELCOME_MESSAGE =
  "Hi! I'm Christian Lugod's portfolio assistant. Ask about skills, projects, experience, testimonials, or contact info — I'll answer and link you to the right section on the site.";

export const CHAT_OFF_TOPIC_REPLY =
  "I can only help with questions about Christian Lugod's portfolio, resume, skills, projects, and professional experience.";

export const CHAT_UNKNOWN_REPLY =
  "I don't have that information in Christian Lugod's resume or portfolio.";

export const CHAT_SUGGESTED_QUESTIONS = [
  "What skills does Christian have?",
  "What projects has Christian worked on?",
  "What do people say about Christian?",
  "Can Christian build full-stack web applications?",
  "How can I contact Christian?",
] as const;

export const CHAT_PAGE_HEADING =
  "Ask about my resume, projects, and experience.";

export const aboutChatSection = {
  ctaLabel: "Chat with My AI Assistant",
  previewTitle: "Portfolio AI Assistant",
  previewDescription:
    "Ask about my resume, projects, skills, work experience, education, awards, and how to get in touch.",
  fullPageLabel: "Open full chat page",
};

/** Resume and portfolio context for the AI assistant — do not invent beyond this. */
export const PORTFOLIO_CHAT_CONTEXT = `
RESUME CONTEXT:

Name:
Christian Lugod

Title:
Full Stack Web Developer

Location:
Mandaluyong, Metro Manila, Philippines

Contact:
Phone: (+63) 92-866-65903
Email: [christianlugod05@gmail.com](mailto:christianlugod05@gmail.com)
Website: topz.dev
GitHub: github.com/topzdev

Professional Summary:
Christian Lugod is a Full Stack Developer with 8+ years of experience building scalable, responsive, and SEO-friendly web applications using React, Next.js, Vue, Nuxt, Laravel, Node.js, and modern front-end tooling.

He is experienced in modernizing legacy websites, developing accessible mobile-first interfaces, improving performance, and leading UI/UX redesigns that helped increase client conversion rates by up to 200%.

Christian has strong end-to-end development experience, from UI/UX mockups and API integration to deployment, optimization, and ongoing maintenance.

Core Skills:

Frontend:
HTML, CSS/SCSS, JavaScript, TypeScript, React, Vue, Next.js, Nuxt.js, React Native, Expo, Tailwind CSS, jQuery

Backend:
Node.js, PHP, Laravel, REST APIs, PostgreSQL, MySQL, MongoDB

Tools and AI:
Git, Docker, Figma, Cursor, ChatGPT, Claude

Cloud:
AWS, Google Cloud Platform, Vercel, Netlify

Capabilities:
UI/UX design mockups, wireframes, API integration, SEO, performance testing, mobile-first development, WCAG accessibility

Professional Experience:

Full Stack Web Developer — WebDev200
Aug 2020 - Present

Responsibilities and achievements:

* Built and maintained modern web applications using React, Next.js, Vue, Nuxt, Laravel, and related tooling across desktop and mobile experiences.
* Delivered responsive, accessible, and SEO-optimized websites focused on performance, usability, and measurable business outcomes.
* Led UI/UX redesigns for multiple client websites, contributing to conversion-rate improvements of up to 200%.
* Modernized and optimized legacy websites, improving page speed, mobile usability, maintainability, and cross-browser consistency.
* Applied mobile-first and WCAG accessibility best practices while collaborating with teams across design, development, and stakeholders.

Freelance Frontend Developer
Feb 2018 - Aug 2020

Responsibilities and achievements:

* Converted outdated websites into modern single-page applications using Vue.js and React.
* Built pixel-perfect interfaces from Photoshop and Figma designs, including PSD-to-HTML and responsive layouts.
* Improved performance and SEO across 3+ projects through front-end optimization and technical cleanup.
* Implemented maintainable front-end architecture with reliable cross-browser compatibility.

Featured Projects:

BulkApparel
Type: Work Project
Role: Full Stack Web Developer
Technologies: PHP, Laravel, CodeIgniter, MySQL, HTML, jQuery, CSS
Description:
E-commerce platform for bulk blank apparel sales in the United States.

VDOWorks
Type: Work Project
Role: Project Manager and Full Stack Web Developer
Technologies: PHP, Laravel, PostgreSQL, React, Next.js, Tailwind CSS
Description:
Job portal focused on video-form style interviews.

GoNurse
Type: Work Project
Role: Full Stack Web and Mobile Developer
Technologies: Nest.js, LLM, React, React Native, Expo, Next.js, Tailwind CSS
Description:
AI assistant tool for doctors and nurses across web and mobile experiences.

HRIS
Type: Work Project
Role: Full Stack Web Developer
Technologies: PHP, Laravel, PostgreSQL, Vue, Nuxt.js, Tailwind CSS
Description:
Employee management tools for WebDev200.

HomeOfDevs
Type: Personal Project
Role: Full Stack Web Developer
Technologies: React, Next.js, PostgreSQL, Tailwind CSS
Description:
Developer portfolio showcase platform for sharing and discovering web projects.

TUP Manila Organization Web-Based Voting System
Type: Capstone Project
Role: Full Stack Web Developer
Technologies: Node.js, PostgreSQL, JavaScript, Vue.js, Nuxt.js, Heroku
Description:
Web-based organization voting system built as a capstone project.

Education:

Bachelor of Science in Information Technology
Technological University of the Philippines
Jun 2018 - Aug 2022

Information and Communication Technology
Metropolitan Medical Center College of Art, Sciences
Jun 2016 - Apr 2018

Awards:

Technology & Automation Excellent Award
WebDev200 — COO Mr. Roldan Miko N. Suarez
2025

Tech-Driven Innovation Award
WebDev200 — COO Mr. Roldan Miko N. Suarez
2024

Best Capstone Project
Computerized Inventory System for Medical Supplies of Metropolitan Medical Center
S.Y. 2017-2018

Best in Technical-Vocational
Information and Communication Technology
S.Y. 2017-2018

${WEBSITE_CHAT_CONTEXT}

${WEBSITE_NAVIGATION_CONTEXT}
`.trim();
