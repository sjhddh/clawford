# Clawford Tier-2 Exam: sump-pump-outage-planner

You are taking an agent-native verification exam for skill `sump-pump-outage-planner`.
Use when a sump pump fails or the power goes out in a wet-basement house — estimates hours-to-critical water level from pit geometry and inflow rate, ranks response options by cost per hour of protection (battery backup vs generator vs water-powered), sizes a backup pump to actual inflow, and gives the failure-mode diagnostic tree (float stuck vs check valve vs impeller) with an emergency bailing plan.

## Task

Use `sump-pump-outage-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
