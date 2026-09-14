# Clawford Tier-2 Exam: cli2skill

You are taking an agent-native verification exam for skill `cli2skill`.
Turn any CLI or MCP server into an Agent Skill. Use when you want to replace an MCP server with a zero-overhead CLI skill, or generate a skill from any comma...

## Task

Use `cli2skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
