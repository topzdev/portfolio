import {
  CHAT_OFF_TOPIC_REPLY,
  CHAT_UNKNOWN_REPLY,
  PORTFOLIO_CHAT_CONTEXT,
} from "@/lib/data/chatbot";
import {
  getActiveChatProvider,
  getChatApiKey,
} from "@/lib/chatbot/config";
import { getGeminiChatReply } from "@/lib/chatbot/providers/gemini";
import { getOpenAiChatReply } from "@/lib/chatbot/providers/openai";

const SYSTEM_PROMPT = `You are Christian Lugod's portfolio assistant on topz.dev.

RULES (follow strictly):
1. Only answer questions related to Christian Lugod's portfolio, resume, skills, projects, work experience, education, awards, services, availability, and contact information.
2. Use ONLY the resume/portfolio context below. Never invent facts, dates, employers, projects, or skills not in the context.
3. If the visitor asks something unrelated to Christian's professional portfolio (jokes, general knowledge, other people, coding homework, etc.), reply with exactly:
"${CHAT_OFF_TOPIC_REPLY}"
4. If the question is on-topic but the answer is not in the context, reply with exactly:
"${CHAT_UNKNOWN_REPLY}"
5. Keep replies concise (2-5 sentences unless listing skills or projects). Be friendly and professional.
6. You may summarize and combine context entries but must not add new information.
7. Format replies in clean Markdown. When listing grouped items (e.g. skills by category), put each category on its own line as "**Category:** item, item" or use "-" bullet points. Always separate sections with a newline. Never run multiple bold headings together on one line.
8. When the question relates to website content (contact, testimonials, projects on the site, skills section, about, etc.), follow the WEBSITE NAVIGATION rules in the context and include the appropriate [label](#section-id) link.

RESUME, WEBSITE, AND NAVIGATION CONTEXT:
${PORTFOLIO_CHAT_CONTEXT}`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function getPortfolioChatReply(
  message: string,
  history: ChatMessage[] = [],
): Promise<string> {
  const trimmed = message.trim();
  if (!trimmed) {
    return "Please enter a question about Christian's portfolio or experience.";
  }

  const provider = getActiveChatProvider();
  const apiKey = getChatApiKey(provider);

  if (apiKey) {
    try {
      const reply =
        provider === "gemini"
          ? await getGeminiChatReply(trimmed, history, SYSTEM_PROMPT, apiKey)
          : await getOpenAiChatReply(trimmed, history, SYSTEM_PROMPT, apiKey);

      if (reply) {
        return reply;
      }
    } catch (error) {
      console.error(`${provider} chat reply error:`, error);
    }
  } else {
    console.warn(
      `Chat provider "${provider}" skipped: missing API key in environment.`,
    );
  }

  return getFallbackReply(trimmed);
}

const OFF_TOPIC_PATTERNS =
  /\b(weather|joke|recipe|bitcoin|politics|who is the president|write me code|homework|solve this|capital of)\b/i;

function getFallbackReply(message: string): string {
  if (OFF_TOPIC_PATTERNS.test(message)) {
    return CHAT_OFF_TOPIC_REPLY;
  }

  const lower = message.toLowerCase();

  if (/contact|email|phone|reach|hire|get in touch/.test(lower)) {
    return "You can contact Christian at christianlugod05@gmail.com or (+63) 92-866-65903. His website is topz.dev and GitHub is github.com/topzdev.\n\n[View contact details](#footer) · [Send a message](#contact)";
  }

  if (/testimonial|recommend|people say|colleague|review/.test(lower)) {
    return "Colleagues praise Christian's problem-solving, dedication, and quality of work — including Miko Suarez (COO of WebDev200), Aldrin Plata (OM of WebDev200), and Sebastian Lavarias (Senior Fullstack Developer).\n\n[View testimonials](#testimonials)";
  }

  if (/skill|tech|stack|framework|language/.test(lower)) {
    return "Christian's core skills include React, Next.js, Vue, Nuxt, TypeScript, Node.js, Laravel, PHP, PostgreSQL, MySQL, MongoDB, Tailwind CSS, Docker, Figma, and AI tools like Cursor and ChatGPT. He also works with React Native and Expo for mobile.\n\n[View skills section](#skills)";
  }

  if (/project/.test(lower)) {
    return "Featured projects include BulkApparel (e-commerce), VDOWorks (job portal), GoNurse (AI health assistant), HRIS (employee management), HomeOfDevs (portfolio platform), and a TUP Manila capstone voting system. Ask about a specific project for more detail.\n\n[View projects](#projects)";
  }

  if (/experience|work|job|career|webdev200|freelance/.test(lower)) {
    return "Christian has been a Full Stack Web Developer at WebDev200 since Aug 2020 and was a Freelance Frontend Developer from Feb 2018 to Aug 2020. He has 7+ years of experience building scalable, SEO-friendly web applications.";
  }

  if (/education|degree|university|tup|college/.test(lower)) {
    return "Christian earned a BS in Information Technology from Technological University of the Philippines (2018–2022) and studied Information and Communication Technology at Metropolitan Medical Center College of Art, Sciences (2016–2018).";
  }

  if (/award|recognition/.test(lower)) {
    return "Awards include the Tech-Driven Innovation Award from WebDev200 (2024), Best Capstone Project (2017–2018), and Best in Technical-Vocational for ICT (2017–2018).";
  }

  if (/full[- ]?stack|build.*app|web application/.test(lower)) {
    return "Yes. Christian is a Full Stack Developer with end-to-end experience—from UI/UX mockups and API integration to deployment and optimization—using React, Next.js, Vue, Nuxt, Laravel, and Node.js.";
  }

  if (/who is|about christian|summary|introduce/.test(lower)) {
    return "Christian Lugod is a Full Stack Web Developer based in Manila, Philippines, with 7+ years of experience building scalable, responsive, and SEO-friendly web applications.\n\n[View about section](#about)";
  }

  if (/service|available|availability|freelanc/.test(lower)) {
    return "Christian offers full-stack web development, UI/UX implementation, API integration, SEO, performance optimization, and maintenance. Contact him at christianlugod05@gmail.com for project inquiries.";
  }

  return CHAT_UNKNOWN_REPLY;
}
