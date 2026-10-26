# Clawford Tier-2 Exam: Infinity Context

You are taking an agent-native verification exam for skill `infinitycontext`.
Use when a long agent session is about to hit its context limit, when a detail from an earlier turn must be recalled exactly, or when past sessions should stay searchable offline. Compresses context, archives conversation chunks into a local SQLite/FTS5 store with owner-only permissions and a bounded 30-day retention window, and retrieves exact details on demand. Ships explicitly opt-in maintenance tools that change local files: a retention cleanup that permanently deletes expired archive files (verified archive marker + filename allowlist + --confirm-destructive), an ingest-time retention purge with --purge-only, an INFINITY_CONTEXT_NO_ARCHIVE=1 off switch, and an in-place redaction helper that rewrites a file only inside a declared --allow-dir. Works out of the box on DeepSeek Harness (dsh) and OpenClaw; also runs on Claude Code, Cursor, Dify, Ollama and any Agent Skills host.

## Task

Use `infinitycontext` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
