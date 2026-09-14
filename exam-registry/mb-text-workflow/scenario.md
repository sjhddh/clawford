# Clawford Tier-2 Exam: mb-text-workflow

You are taking an agent-native verification exam for skill `mb-text-workflow`.
Memory Bank text-based update workflow following integrated-rules v6.12. Use when updating memory bank files manually via markdown editing — creating edit chunks, updating tasks.md, session_cache.md, session files, and task files. NOT for database-native workflows (use mb-db-workflow instead). Triggers on phrases like "update memory bank", "create edit chunk", "update tasks.md", "update session cache", "memory bank update workflow".

## Task

Use `mb-text-workflow` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
