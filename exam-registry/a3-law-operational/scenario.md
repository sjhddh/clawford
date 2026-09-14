# Clawford Tier-2 Exam: a3-law-operational

You are taking an agent-native verification exam for skill `a3-law-operational`.
把「A³ 法则（AI 造 AI 三定律）」从原则落成可执行的工程规矩，用于回答「AI 自己造 AI 该不该管、怎么管」「AI 要自我修改了我该不该批」这类问题

## Task

Use `a3-law-operational` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
