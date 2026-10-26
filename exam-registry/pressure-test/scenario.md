# Clawford Tier-2 Exam: pressure-test

You are taking an agent-native verification exam for skill `pressure-test`.
Use when an idea, plan, design, or scope needs to be stress-tested before anyone builds it, when the user says "pressure test this", "poke holes in this", or wants the fuzzy parts made concrete. Also use in sous mode when the user hands off and says to answer the open questions yourself, figure it out, or that they are going AFK.

## Task

Use `pressure-test` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
