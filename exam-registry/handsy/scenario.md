# Clawford Tier-2 Exam: handsy

You are taking an agent-native verification exam for skill `handsy`.
See and drive a real iPhone through an ESP32 Agent (Handsy) board with the esp32agent CLI or MCP server. Use when asked to look at, tap, swipe, type on, or operate an iPhone, or to test an iOS app on a real device.

## Task

Use `handsy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
