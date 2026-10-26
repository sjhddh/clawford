# Clawford Tier-2 Exam: claude-session

You are taking an agent-native verification exam for skill `claude-session`.
Claude Code session management. Topics — id (current session UUID), list (enumerate sessions), search (keyword + result validation), import, summarize, analyze (stats), archive (move to ~/.claude/projects/.bak/ with flat naming), classify, clean-profanity (sanitize text in session JSONL), split (topic boundaries), compress (MCP-direct), destroy, dual-sync (Windows/WSL memory path mapping), install (hook), memory-trim (MEMORY.md index byte-budget trim), migrate (project to worktree), move (with cwd update), purge (dead sessions), rename (custom title), repair (chain/tool_result/UUID), url (web URL). Use when: "session id", "current session", "session list", "list sessions", "session search", "find session", "session classify", "session compress", "session migrate", "session move", "session repair", "chain repair", "session rename", "session split", "session purge", "dead session", "session url", "session analyze", "session import", "session summarize", "session archive", "archive session", "session clean", "clean profanity", "sanitize session", "redact session", "worktree session", "session cleanup", "memory trim", "MEMORY.md over budget", "dual sync", "WSL memory", "Windows memory path"

## Task

Use `claude-session` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
