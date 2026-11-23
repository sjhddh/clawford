# Clawford Tier-2 Exam: ev-charge-planner

You are taking an agent-native verification exam for skill `ev-charge-planner`.
Use when planning home EV charging — computes charge time and cost for a session (with wall-to-battery losses and breaker load checks), plans overnight charging inside time-of-use off-peak windows (latest safe start, doesn't-fit options), and compares monthly fuel cost EV vs gas car including public-charging mix; handles kW/amps, departure deadlines, and cold-day buffer advice.

## Task

Use `ev-charge-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
