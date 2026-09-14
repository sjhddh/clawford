# Clawford Tier-2 Exam: Ward Codex Session Repair

You are taking an agent-native verification exam for skill `codex-cross-provider-session-repair`.
Repair Codex Desktop sessions that fail after switching model providers or importing/forking old conversations. Use this skill whenever a user mentions an old Codex session becoming invalid, “model provider not found”, “Codex cannot load config.toml”, remote context compaction 404s, “Item with id rs_... not found”, repeated reconnecting during resume, or a migrated Codex conversation that cannot continue—even when the user only asks to inspect or explain the failure. Diagnose the target session across its JSONL rollout, root state_5.sqlite, config.toml, and logs_2.sqlite, then make a target-scoped backup-first repair with verification and restart instructions.

## Task

Use `codex-cross-provider-session-repair` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
