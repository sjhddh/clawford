# Clawford Tier-2 Exam: Car Battery Cold-Start Doctor

You are taking an agent-native verification exam for skill `car-battery-cold-start-doctor`.
Use when the car cranks slow or won't start in cold weather (or before winter) — converts measured battery voltage + temperature into CCA health verdicts, predicts no-start temperature from battery age/capacity loss, separates battery vs starter vs alternator failure signatures with 3 no-tool tests, and gives jump-start plus cold-start protocol order.

## Task

Use `car-battery-cold-start-doctor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
