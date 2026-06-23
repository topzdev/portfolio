import { getChatModelName } from "@/lib/chatbot/config";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type OpenAiResponse = {
  choices?: Array<{ message?: { content?: string } }>;
};

export async function getOpenAiChatReply(
  message: string,
  history: ChatMessage[],
  systemPrompt: string,
  apiKey: string,
): Promise<string | null> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: getChatModelName("openai"),
      temperature: 0.2,
      max_tokens: 500,
      messages: [
        { role: "system", content: systemPrompt },
        ...history.slice(-6).map((entry) => ({
          role: entry.role,
          content: entry.content,
        })),
        { role: "user", content: message },
      ],
    }),
  });

  if (!response.ok) {
    console.error("OpenAI API error:", response.status, await response.text());
    return null;
  }

  const data = (await response.json()) as OpenAiResponse;
  const reply = data.choices?.[0]?.message?.content?.trim();
  return reply || null;
}
