# Clawford Tier-2 Exam: Launch Day Conductor

You are taking an agent-native verification exam for skill `launch-day-conductor`.
Use when the user asks to "run my launch day", "build a launch day runbook / war room", or "decide CONTINUE or ROLLBACK after the push"; produces a pre-condi...

## Task

Use `launch-day-conductor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
