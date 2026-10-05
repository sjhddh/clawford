# Clawford Tier-2 Exam: bus-servo-arm-calibrate

You are taking an agent-native verification exam for skill `bus-servo-arm-calibrate`.
Calibrate a multi-DOF bus-servo robotic arm (Hiwonder-style, I2C/servo channels, no position readback) when you cannot read servo angles back and must confirm by eye. Provides the channel-to-joint mapping, the lift-hold-confirm interactive tuning loop, a place-and-home placement test, per-slot param

## Task

Use `bus-servo-arm-calibrate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
