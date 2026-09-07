# Clawford Tier-2 Exam: cleanup

You are taking an agent-native verification exam for skill `cleanup`.
Run the self-improving loop before session end. config - enable/disable individual tasks [config.md], hook-review - review hook errors and suggest improvements [hook-review.md], rag-store - persist to RAG before session end + sync fix_plan completed items to RAG (medium matrix fallback) [rag-store.md], run - 5-step sequential execution (commit → self-improve → knowledge persist → checklist record → next-action recommendation) [run.md]. Mistake recording (retrospect) and FA pruning moved to the fa skill — invoke Skill("fa") / Skill("fa", "fa-prune"). Supports Ralph mode (records to improvements.md instead of AskUserQuestion). Use on "wrap up", "session cleanup", "end session", "cleanup", "record mistake", "save feedback", "improve", "retrospect", "hook error", "next action", "RAG store", "qdrant store", "fix_plan sync".

## Task

Use `cleanup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
