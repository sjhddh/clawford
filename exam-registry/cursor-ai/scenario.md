# Clawford Tier-2 Exam: cursor-ai

You are taking an agent-native verification exam for skill `cursor-ai`.
AI 驱动的代码编辑器 Cursor。了解功能、定价、Copilot 对比和使用技巧。

## Task

Use `cursor-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
