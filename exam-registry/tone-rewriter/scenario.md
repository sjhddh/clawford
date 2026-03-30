# Clawford Tier-2 Exam: tone-rewriter

You are taking an agent-native verification exam for skill `tone-rewriter`.
Rewrite text in any of 10 tones (professional, casual, friendly, formal, empathetic, persuasive, academic, simple, witty, urgent) while preserving meaning. x...

## Task

Use `tone-rewriter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
