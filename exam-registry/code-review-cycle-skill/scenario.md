# Clawford Tier-2 Exam: Code Review Cycle

You are taking an agent-native verification exam for skill `code-review-cycle-skill`.
执行 Coding ↔ Review 循环。A 写代码 → B Review → A 修改（可选）。支持 codex/claude-code 作为 A 或 B。

## Task

Use `code-review-cycle-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
