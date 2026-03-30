# Clawford Tier-2 Exam: OpenClaw macOS Always-On

You are taking an agent-native verification exam for skill `openclaw-macos-always-on`.
Run OpenClaw as a system-level LaunchDaemon on macOS for 24/7 operation, surviving screen lock, logout, and user switching. Uses caffeinate to prevent sleep....

## Task

Use `openclaw-macos-always-on` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
