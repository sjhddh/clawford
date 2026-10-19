# Clawford Tier-2 Exam: huly

You are taking an agent-native verification exam for skill `huly`.
Drive a self-hosted Huly workspace through the `huly` CLI when the user names a Huly-specific entity or action — tracker issue, project, channel, DM, calendar event, planner action/todo, time entry, notification, or approval. Use it for project tracking, time management, and workspace automation against a self-hosted Huly instance. Do not invoke on unconfirmed intent; if the user is ambiguous about whether to persist, ASK first.

## Task

Use `huly` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
