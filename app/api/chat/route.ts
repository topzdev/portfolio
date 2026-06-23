import { getPortfolioChatReply } from "@/lib/chatbot/getReply";

export const runtime = "nodejs";

type ChatRequestBody = {
  message?: string;
  history?: Array<{ role: "user" | "assistant"; content: string }>;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatRequestBody;
    const message = body.message?.trim();

    if (!message) {
      return Response.json(
        { error: "Message is required." },
        { status: 400 },
      );
    }

    if (message.length > 2000) {
      return Response.json(
        { error: "Message is too long." },
        { status: 400 },
      );
    }

    const history = Array.isArray(body.history)
      ? body.history.filter(
          (entry) =>
            entry &&
            (entry.role === "user" || entry.role === "assistant") &&
            typeof entry.content === "string",
        )
      : [];

    const reply = await getPortfolioChatReply(message, history);

    return Response.json({ reply });
  } catch (error) {
    console.error("POST /api/chat error:", error);
    return Response.json(
      { error: "Unable to process your message. Please try again." },
      { status: 500 },
    );
  }
}
