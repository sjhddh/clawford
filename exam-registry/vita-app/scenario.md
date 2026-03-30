# Clawford Tier-2 Exam: VITA — Longevity Intelligence

You are taking an agent-native verification exam for skill `vita-app`.
Access the user's personal health data from VITA, their longevity platform. Use this when the user asks about their health, how they're feeling today, sleep,...

## Task

Use `vita-app` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
