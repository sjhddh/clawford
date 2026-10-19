# Clawford Tier-2 Exam: mcptoon

You are taking an agent-native verification exam for skill `mcptoon`.
Compress MCP tool discovery with the mcptoon CLI. Trigger when a session has a large MCP tool catalog (many servers/tools), when the user mentions token cost, tool discovery, mcptoon, or asks to list/call MCP tools efficiently. Also route here when the user says the MCP tool list is too large, the agent context window is filling up with tool schemas, or they need the same MCP servers configured across Claude Code, Cursor, Codex, Cline, Windsurf and other agents. Also covers managing an agent's skill catalog with `mcptoon skills` (list / resolve / sync / doctor / add / remove, plus a version gate, a read-only health check, derived Roo/OpenCode views, tombstoned removals, and a gate that refuses to prune a view from an undecided removal). Also route here when a doc folder is too big to read — 文档太多、AGENTS.md / CONTEXT.md / docs/ 太大、不知道该读哪个文件、想省 token 读文档、整读一个目录太贵: `mcptoon docs index <dir>` then `mcptoon docs resolve "<question>"` returns the few files worth opening — read one chapter, not all — offline, no LLM, descriptions derived from headings. Also route here when the tool catalog is large and the agent keeps picking the wrong tool — 工具太多选不准、超过 40 个工具后模型开始乱选、为某个任务挑最该用的几个工具: `mcptoon select "<task>"` returns the top few (default 3), and its ranker is pluggable via `mcptoon config set select.engine command` (run your own embeddings/LLM ranker, no dependency added). Also route here when the user's MCP tools seem to have gone missing: a gateway is mounted in COMPACT exposure by default, so it withholds the upstream tool list from `tools/list` (they stay callable) — explain the preset and switch back with `mcptoon config set exposure full`. Also route here when a tool *result* looks truncated, compressed, or "lost data": result compression is on by default, originals come back via `mcptoon_retrieve handle=<id>`, and it turns off with `mcptoon config set compress off`. mcptoon compresses 71,929 tokens of tool schemas to 581 (-99.2%) and serves as an MCP 2026-07-28 stateless-first bridge.

## Task

Use `mcptoon` to investigate a concrete query and produce an evidence-backed report at `artifacts/mcptoon-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mcptoon-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
