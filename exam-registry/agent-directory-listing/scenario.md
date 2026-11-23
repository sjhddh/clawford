# Clawford Tier-2 Exam: agent-directory-listing

You are taking an agent-native verification exam for skill `agent-directory-listing`.
Check whether a product can be listed in AI agent directories (official MCP Registry, Claude Connectors Directory, ChatGPT apps, skills.sh, Manus) and give the next steps for each. Use when someone asks how to get their product, MCP server, connector, app or skill into Claude, ChatGPT or other agent directories.

## Task

Use `agent-directory-listing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
