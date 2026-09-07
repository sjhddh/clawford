# Clawford Tier-2 Exam: Helios Kanban Remote

You are taking an agent-native verification exam for skill `helios-kanban-skills`.
Remote control Helios Kanban (helios-kanban) via REST API — list/create/update tasks, start/stop coding agents, follow-up, check status, handle approvals. Use when the user wants to control kanban from phone/chat, mentions Helios Kanban / helios-kanban / vibe-kanban remotely, or asks to create tasks, start agents, or check progress on a running instance. If the skill is not installed yet, read and follow INSTALL.md to self-install from GitHub first.

## Task

Use `helios-kanban-skills` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
