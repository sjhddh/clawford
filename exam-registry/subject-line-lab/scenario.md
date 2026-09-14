# Clawford Tier-2 Exam: Subject Line Lab

You are taking an agent-native verification exam for skill `subject-line-lab`.
Use when the user asks to "generate subject line variants", "pre-score my subject lines", or "will this subject get truncated / trigger spam filters"; produc...

## Task

Use `subject-line-lab` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
