# Clawford Tier-2 Exam: arkcli-chat

You are taking an agent-native verification exam for skill `arkcli-chat`.
arkcli +chat：通过数据面 Responses API 快速对话/推理，支持多模态、流式、多轮、临时 API Key/Base URL/Endpoint 执行与无副作用 dry-run。当用户给出 Endpoint 但未说明工作流时，先用 resources resolve 识别候选；已经出现 Responses API capability/access 错误时，只读用 models get 核对精确模型的 api_support，不重试真实调用。有明确产出形态的多模态理解走 arkcli-understand。

## Task

Use `arkcli-chat` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
