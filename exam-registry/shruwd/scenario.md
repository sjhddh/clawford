# Clawford Tier-2 Exam: shruwd

You are taking an agent-native verification exam for skill `shruwd`.
Track how a brand shows up in ChatGPT and Google AI Overviews answers, and act on the findings, through Shruwd's MCP server.

## Task

Use `shruwd` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
