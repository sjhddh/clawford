# Clawford Tier-2 Exam: traceability-audit-team

You are taking an agent-native verification exam for skill `traceability-audit-team`.
AI 身份溯源审计团，用于回答「这段输出到底是哪个 AI 生成的」「怎么证明它是它声称的身份」「AI 说的话能不能当证据」这类问题

## Task

Use `traceability-audit-team` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
