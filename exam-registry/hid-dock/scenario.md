# Clawford Tier-2 Exam: Hid Dock

You are taking an agent-native verification exam for skill `hid-dock`.
Connect to and control the Acasis Flow HID dock hardware (VID=0x35e6 PID=0xa4ac, 64-byte reports). Use when: the user asks to connect, check, switch view/pag...

## Task

Use `hid-dock` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
