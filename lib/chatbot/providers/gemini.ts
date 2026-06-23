import { getChatModelName } from "@/lib/chatbot/config";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
};

export async function getGeminiChatReply(
  message: string,
  history: ChatMessage[],
  systemPrompt: string,
  apiKey: string,
): Promise<string | null> {
  const model = getChatModelName("gemini");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const contents = [
    ...history.slice(-6).map((entry) => ({
      role: entry.role === "assistant" ? "model" : "user",
      parts: [{ text: entry.content }],
    })),
    {
      role: "user",
      parts: [{ text: message }],
    },
  ];

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: systemPrompt }],
      },
      contents,
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 500,
      },
    }),
  });

  if (!response.ok) {
    console.error("Gemini API error:", response.status, await response.text());
    return null;
  }

  const data = (await response.json()) as GeminiResponse;
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  return reply || null;
}
