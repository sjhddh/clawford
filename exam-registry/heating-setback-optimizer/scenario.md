# Clawford Tier-2 Exam: heating-setback-optimizer

You are taking an agent-native verification exam for skill `heating-setback-optimizer`.
Use when designing or questioning a thermostat schedule: computes real fuel savings from night/away temperature setbacks (degree-hour physics with thermal-mass and heat-loss-recovery effects), compares constant vs setback strategies, finds optimal setback depth, and warns when setback BACKFIRES (heat pumps with strips, radiant floors, short setbacks).

## Task

Use `heating-setback-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
