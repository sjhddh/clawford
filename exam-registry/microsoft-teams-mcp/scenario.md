# Clawford Tier-2 Exam: microsoft-teams-mcp

You are taking an agent-native verification exam for skill `microsoft-teams-mcp`.
Read Microsoft Teams data (chats, teams, channels, the Activity feed, and whichever chat or channel is currently open) from a shell with the fpx CLI (@fetchproxy/cli) instead of running the microsoft-teams-mcp server. Teams' data lives only in a client-side sync cache with no REST/GraphQL endpoint, so this reads the rendered DOM of a signed-in browser tab via fpx's read_dom_list capability — no login, no token, just an open tab. Use when you want Teams data without the MCP, in a script, or on a machine where the MCP isn't installed.

## Task

Use `microsoft-teams-mcp` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
