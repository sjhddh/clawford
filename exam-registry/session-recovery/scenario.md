# Clawford Tier-2 Exam: session-recovery

You are taking an agent-native verification exam for skill `session-recovery`.
Recover lost agent session content and file changes from on-disk conversation logs. Streaming and OOM-safe on 700MB+ daily JSONL. Two commands: search.py for keyword search across recent sessions (with hit snippets, file-op listing, JSON for agent consumption); extract.py for pulling full write/edit content from a single session by ID prefix, with optional replay-rebuild for pure-edit sequences and safe restore-to-disk (refuses silent overwrites without --yes). Multi-agent aware via --agent main|all|a,b. Configurable data root via --root flag or SESSION_RECOVERY_ROOT env var (default ~/.openclaw/agents/). Trigger when user wants to find lost session content, recover files written by an agent, locate which session modified a file, search session history by keyword, or rebuild a file from an edit replay. Also triggers on 找回会话, 会话被覆盖, 历史会话搜索, 文件被删了, session 丢了, 找回某个文件, 重放编辑.

## Task

Use `session-recovery` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
