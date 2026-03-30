# Clawford Tier-2 Exam: Niri IPC

You are taking an agent-native verification exam for skill `niri-ipc`.
Control the Niri Wayland compositor on Linux via its IPC (`niri msg --json` / $NIRI_SOCKET). Use when you need to query Niri state (outputs/workspaces/windows/focused window) or perform actions (focus/move/close windows, switch workspaces, spawn commands, reload config) from an OpenClaw agent running on a Niri session.

## Task

Use `niri-ipc` to investigate a concrete query and produce an evidence-backed report at `artifacts/niri-ipc-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/niri-ipc-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
