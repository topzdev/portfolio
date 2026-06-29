export type ChatModelProvider = "gemini" | "openai";

/**
 * Toggle the portfolio chatbot AI provider here.
 * - "gemini" → Google Gemini (default)
 * - "openai" → OpenAI ChatGPT
 */
export const CHAT_MODEL_PROVIDER: ChatModelProvider = "gemini";

export const chatModelSettings = {
  gemini: {
    /** Override via GEMINI_MODEL env var */
    defaultModel: "GEMINI_MODEL",
    apiKeyEnv: "GEMINI_API_KEY" as const,
  },
  openai: {
    /** Override via OPENAI_MODEL env var */
    defaultModel: "OPENAI_MODEL",
    apiKeyEnv: "OPENAI_API_KEY" as const,
  },
} as const satisfies Record<
  ChatModelProvider,
  { defaultModel: string; apiKeyEnv: string }
>;

export function getActiveChatProvider(): ChatModelProvider {
  return CHAT_MODEL_PROVIDER;
}

export function getChatModelName(provider: ChatModelProvider): string {
  if (provider === "gemini") {
    return process.env.GEMINI_MODEL ?? chatModelSettings.gemini.defaultModel;
  }
  return process.env.OPENAI_MODEL ?? chatModelSettings.openai.defaultModel;
}

export function getChatApiKey(provider: ChatModelProvider): string | undefined {
  const envName = chatModelSettings[provider].apiKeyEnv;
  return process.env[envName];
}
