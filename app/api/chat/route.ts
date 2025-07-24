import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import { streamText, createUIMessageStream, createUIMessageStreamResponse } from 'ai'

const provider = createOpenAICompatible({
  name: 'kimi-k2',
  apiKey: 'sk-9lk0nBnxfS9hOlWZfwETlz0wdhOHc4pYcyCLNBnsbUEOBVtu',
  baseURL: 'https://api.moonshot.cn/v1',
});

export async function POST(req: Request) {
  const { messages } = await req.json()

  const stream = createUIMessageStream({
    execute: ({ writer }) => {
      const result = streamText({
        model: provider('kimi-k2-0711-preview'),
        messages,
        tools: {
          date: {
            "name": "date",
            "description": "日期时间处理工具，支持显示当前时间、时区转换、日期计算等功能",
            "parameters": {
              "properties": {
                "date": {
                  "description": "日期字符串，格式：YYYY-MM-DD 或 YYYY-MM-DD HH:MM:SS",
                  "type": "string"
                },
                "date1": {
                  "description": "第一个日期（用于计算日期差）",
                  "type": "string"
                },
                "date2": {
                  "description": "第二个日期（用于计算日期差）",
                  "type": "string"
                },
                "days": {
                  "description": "天数（用于添加或减少）",
                  "type": "integer"
                },
                "format": {
                  "default": "%Y-%m-%d %H:%M:%S",
                  "description": "输出格式（Python strftime格式），默认为 %Y-%m-%d %H:%M:%S，示例：%Y-%m-%d 表示 YYYY-MM-DD 格式",
                  "type": "string"
                },
                "from_zone": {
                  "description": "源时区（用于时区转换）",
                  "type": "string"
                },
                "operation": {
                  "description": "操作类型：time（显示时间）, convert（时区转换）, between（计算日期差）, add（添加天数）, subtract（减少天数）",
                  "enum": [
                    "time",
                    "convert",
                    "between",
                    "add",
                    "subtract"
                  ],
                  "type": "string"
                },
                "to_zone": {
                  "description": "目标时区（用于时区转换）",
                  "type": "string"
                },
                "zone": {
                  "description": "时区名称，如 Asia/Shanghai, America/New_York, UTC 等",
                  "type": "string"
                }
              },
              "required": [
                "operation"
              ],
              "type": "object"
            }
          }
        },
        toolChoice: 'auto',
        temperature: 0,
      });
      writer.merge(result.toUIMessageStream());
    },
  });

  return createUIMessageStreamResponse({ stream });
}