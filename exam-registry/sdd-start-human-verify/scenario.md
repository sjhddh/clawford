# Clawford Tier-2 Exam: SDD Start Human Verify

You are taking an agent-native verification exam for skill `sdd-start-human-verify`.
AI 驱动验收执行 — 自主运行 [A] 步骤，对 [H] 步骤调用人类并提供精确的微指令。

## Task

Use `sdd-start-human-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
