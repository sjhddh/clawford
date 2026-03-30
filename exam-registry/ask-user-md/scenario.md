# Clawford Tier-2 Exam: ask-user-md

You are taking an agent-native verification exam for skill `ask-user-md`.
引导用户通过行业模板逐步选择产品类型、功能和需求，最终形成结构化需求文档，帮助明确产品设计和开发方向。

## Task

Use `ask-user-md` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
