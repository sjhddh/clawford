# Clawford Tier-2 Exam: connect-to-skilder

You are taking an agent-native verification exam for skill `connect-to-skilder`.
One-shot instruction to connect this AI agent to Skilder over MCP using the official remote endpoint and OAuth. Paste this whole skill into an agent's chat once. It should act on it immediately, without asking the user anything first.

## Task

Use `connect-to-skilder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
