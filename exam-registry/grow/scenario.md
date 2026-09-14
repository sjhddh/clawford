# Clawford Tier-2 Exam: grow

You are taking an agent-native verification exam for skill `grow`.
Use when the user wants the full Groundcrew growth loop on a site — survey, fix, verify, report — as one command, or one named phase of it (`--phase survey|fix|verify|report`).

## Task

Use `grow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
