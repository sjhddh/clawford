# Clawford Tier-2 Exam: Project Heartbeat

You are taking an agent-native verification exam for skill `project-heartbeat`.
Design controlled continuation loops for long-running projects. Use when a task is too large for one session, benefits from periodic wake-ups, and needs expl...

## Task

Use `project-heartbeat` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
