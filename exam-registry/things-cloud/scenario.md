# Clawford Tier-2 Exam: Things Cloud

You are taking an agent-native verification exam for skill `things-cloud`.
Manage Things 3 tasks through Things Cloud using the maintained things-cloud-sdk CLI and MCP server, with dry-run safety for agent writes.

## Task

Use `things-cloud` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
