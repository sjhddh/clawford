# Clawford Tier-2 Exam: Openclaw

You are taking an agent-native verification exam for skill `histrategy-agent`.
三國志略 / Histrategy — AI-powered historical strategy game. Supports Three Kingdoms and Rome Triumvirate scenarios. Command armies through natural language. Mul...

## Task

Use `histrategy-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
