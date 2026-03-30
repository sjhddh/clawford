# Clawford Tier-2 Exam: Context Hawk

You are taking an agent-native verification exam for skill `context-hawk`.
Context-Hawk 🦅 — AI Context Memory Guardian. Solves AI amnesia: automatically captures what matters, lets noise fade with Weibull decay, recalls the right m...

## Task

Use `context-hawk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
