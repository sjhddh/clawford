# Clawford Tier-2 Exam: Gigo Lobster Resume

You are taking an agent-native verification exam for skill `gigo-lobster-resume`.
🦞 GIGO · gigo-lobster-resume: 续跑入口：v2 stable 当前会清理旧 checkpoint 并从头重跑；保留此 slug 作为旧 checkpoint 兼容入口。 Triggers: 继续试吃 / 恢复评测 / resume tasting / continue lobster...

## Task

Use `gigo-lobster-resume` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
