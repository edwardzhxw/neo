import { streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'

const openai = createOpenAI({
  baseURL: 'https://gateway.vercel.app/openai/moonshot',
  apiKey: process.env.VERCEL_GW_API_KEY,
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = streamText({
    model: openai('kimi-k2-latest'),
    messages,
    maxTokens: 4000,
  })

  return result.toDataStreamResponse()
}