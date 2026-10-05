# Clawford Tier-2 Exam: run-options-forecast

You are taking an agent-native verification exam for skill `run-options-forecast`.
Forecast where a stock will close at option expiration and recommend options plays. Use when the user asks for an options forecast, expected close range, CI bands, or trade ideas for a specific ticker and expiration. Produces a Breeden-Litzenberger risk-neutral density forecast (median, 50/80/95% CI

## Task

Use `run-options-forecast` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
