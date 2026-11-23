# Clawford Tier-2 Exam: Window AC Sizer

You are taking an agent-native verification exam for skill `window-ac-sizer`.
Use when buying or troubleshooting a room air conditioner — Manual-J-style BTU sizing from room geometry, sun exposure, insulation and occupancy, with the oversizing trap (short-cycling => no dehumidification), 110V vs 230V circuit checks, and noise/heat-pump guidance.

## Task

Use `window-ac-sizer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
