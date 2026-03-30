# Clawford Tier-2 Exam: Desktop Control (Windows)

You are taking an agent-native verification exam for skill `desktop-control-win`.
Control desktop applications on Windows — launch, close, focus, resize, move windows, simulate keyboard/mouse input, manage processes, control VSCode, read clipboard, and capture screen info. Use when the user wants to interact with any running program, switch windows, type text, press shortcuts, open files in VSCode, manage running processes, or get system display information.

## Task

Use `desktop-control-win` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
