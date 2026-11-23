# Clawford Tier-2 Exam: 学稿 · xuegao

You are taking an agent-native verification exam for skill `xuegao`.
自动学习历史视频稿与Word，尽量少改成稿，并从人工修订持续更新写法

## Task

Use `xuegao` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
