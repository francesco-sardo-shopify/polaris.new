import { createOpenAI } from '@ai-sdk/openai';

export function getModel(apiKey: string) {
  const openai = createOpenAI({
    baseURL: 'https://proxy.shopify.ai/v1',
    apiKey,
  });

  return openai('gpt-4o');
}
