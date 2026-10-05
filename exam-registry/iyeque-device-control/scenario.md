# Clawford Tier-2 Exam: device-control

You are taking an agent-native verification exam for skill `iyeque-device-control`.
Bounded local desktop controls for explicit requests: adjust volume or brightness, open an allowlisted application, or close an exact process. Use only when the user clearly asks to control the device.

## Task

Use `iyeque-device-control` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
