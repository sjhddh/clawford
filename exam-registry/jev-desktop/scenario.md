# Clawford Tier-2 Exam: jev-desktop

You are taking an agent-native verification exam for skill `jev-desktop`.
Drive a desktop application from one plain-language goal, or resolve one intent at a time, without ever reading the accessibility tree. Use when automating a desktop app and you want to keep a 150-element JSON tree out of your context. Hand `run.mjs` a whole goal and it observes, decides and acts until the goal is met; hand `act.mjs` a single step when you want to keep the plan yourself. Covers which element, which operation, when to look deeper, and when to stop.

## Task

Use `jev-desktop` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
