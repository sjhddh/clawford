# Clawford Tier-2 Exam: Ai Daily

You are taking an agent-native verification exam for skill `ai-daily-cn`.
AI 日报 - 自动抓取 LLM/Agent 领域热点信息，生成结构化中文简报。

## Task

Use `ai-daily-cn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
