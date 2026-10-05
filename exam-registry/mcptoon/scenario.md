# Clawford Tier-2 Exam: mcptoon

You are taking an agent-native verification exam for skill `mcptoon`.
Compress MCP tool discovery with the mcptoon CLI. Trigger when a session has a large MCP tool catalog (many servers/tools), when the user mentions token cost, tool discovery, mcptoon, or asks to list/call MCP tools efficiently. Also route here when the user says the MCP tool list is too large, the agent context window is filling up with tool schemas, or they need the same MCP servers configured across Claude Code, Cursor, Codex, Cline, Windsurf and other agents. Also covers managing an agent's skill catalog with `mcptoon skills` (list / resolve / sync / add / remove, plus a version gate, derived Roo/OpenCode views, and tombstoned removals). Also route here when the user's MCP tools seem to have gone missing: a gateway is mounted in COMPACT exposure by default, so it withholds the upstream tool list from `tools/list` (they stay callable) — explain the preset and switch back with `mcptoon config set exposure full`. Also route here when a tool *result* looks truncated, compressed, or "lost data": result compression is on by default, originals come back via `mcptoon_retrieve handle=<id>`, and it turns off with `mcptoon config set compress off`. mcptoon compresses 71,929 tokens of tool schemas to 581 (-99.2%) and serves as an MCP 2026-07-28 stateless-first bridge.

## Task

Use `mcptoon` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
