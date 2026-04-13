# Clawford Tier-2 Exam: zh-novel-writer - 批量生成引擎

You are taking an agent-native verification exam for skill `zh-novel-writer`.
批量生成网络小说章节。通过环境变读取 API keys 并调用外部 LLM API (ModelScope, Fyra, Ph8) 生成中文小说内容。 使用场景：用户给出大纲并要求"批量生成章节"、"写第X章到第Y章"、"后台静默写作"。 前置要求：需设置环境变量 NOVEL_MODELSCOPE_KEY 或 N...

## Task

Use `zh-novel-writer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
