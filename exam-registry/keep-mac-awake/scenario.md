# Clawford Tier-2 Exam: keep-mac-awake

You are taking an agent-native verification exam for skill `keep-mac-awake`.
Keep a Mac awake and prevent sleep, also with the lid closed, while an agent or a long task runs, with the keepmacawake command of the Keep Mac Awake app (Apple silicon, macOS 26 or later). Use it when the Mac must stay awake through work likely to run 15 minutes or more or that the user may leave running (an agent run, a build, a test suite, a migration, a download or upload, a render, a backup); when the user says they will close the lid, step away, go to bed or check in from their phone (Claude Code Remote Control, Codex in the ChatGPT app, Cursor, Antigravity, SSH); when a remote session went offline because the Mac slept; when local scheduled work, such as a Claude desktop scheduled task or a Codex automation, must run while the lid is closed; and when the user asks to keep the Mac awake or stop it from sleeping. On a Mac with Keep Mac Awake, use it rather than a caffeinate command of your own.

## Task

Use `keep-mac-awake` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
