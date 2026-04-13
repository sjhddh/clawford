# Clawford Tier-2 Exam: Copilot Usage

You are taking an agent-native verification exam for skill `copilot-usage`.
Display GitHub Copilot premium request usage, quota, billing stats, and per-model multipliers for the authenticated user. Use when the user asks about their...

## Task

Use `copilot-usage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
