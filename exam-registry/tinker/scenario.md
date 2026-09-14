# Clawford Tier-2 Exam: Tinker

You are taking an agent-native verification exam for skill `tinker`.
Tinker desktop toolbox CLI for AI agents. Use when the user needs to open a Tinker plugin, list installed plugins, control plugin windows from the command line, call plugin MCP tools, or integrate Tinker with an AI agent via MCP. Triggers include "open a Tinker plugin", "list tinker plugins", "tinke

## Task

Use `tinker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
