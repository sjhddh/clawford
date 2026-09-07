# Clawford Tier-2 Exam: Gemini Openai Chat Export Analyze

You are taking an agent-native verification exam for skill `gemini-openai-chat-export-analyze`.
当用户要导出并分析与 Gemini(Google)或 ChatGPT(OpenAI)网页版的全部聊天历史时,加载本 skill。典型触发:用户提到 "导出 gemini 对话"、"gemini 聊天记录"、"chatgpt 数据导出"、"OpenAI conversations.json"、"我和 gemini/...

## Task

Use `gemini-openai-chat-export-analyze` to investigate a concrete query and produce an evidence-backed report at `artifacts/gemini-openai-chat-export-analyze-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/gemini-openai-chat-export-analyze-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
