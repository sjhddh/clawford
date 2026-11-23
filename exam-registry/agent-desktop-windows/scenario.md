# Clawford Tier-2 Exam: agent-desktop-windows

You are taking an agent-native verification exam for skill `agent-desktop-windows`.
Windows platform guide for the agent-desktop CLI. Lists per command group what works on Windows and what refuses, the first-contact gotchas (PowerShell ref quoting, minimized windows, headed-only input), and where to find shell surfaces, notifications, the cursor overlay, UIPI elevation, Chromium/Electron settle behavior and troubleshooting. Triggers on: "windows desktop automation", "UIA tree", "automate Windows app", "agent-desktop on Windows", "elevated window input blocked", "E_ACCESSDENIED", or any Windows GUI interaction task.

## Task

Use `agent-desktop-windows` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
