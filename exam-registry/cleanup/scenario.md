# Clawford Tier-2 Exam: cleanup

You are taking an agent-native verification exam for skill `cleanup`.
Run the self-improving loop before session end. config - enable/disable individual tasks [config.md], hook-review - review hook errors and suggest improvements [hook-review.md], rag-store - persist to RAG before session end + sync fix_plan completed items to RAG (medium matrix fallback) [rag-store.md], run - 4-step sequential execution pipeline, entry point and Steps 0-1 [run.md]; its step bodies live in run-self-improve.md (Step 2), run-knowledge-persist.md (Step 3), run-checklist-sync.md (Step 4-A/4-B) and run-wip-handoff.md (Step 4-C/Step 4.5). Mistake recording (retrospect) and FA pruning moved to the fa skill — invoke Skill("fa") / Skill("fa", "fa-prune"). Supports Ralph mode (records to improvements.md instead of AskUserQuestion). Use on "wrap up", "session cleanup", "end session", "cleanup", "record mistake", "save feedback", "improve", "retrospect", "hook error", "next action", "RAG store", "qdrant store", "fix_plan sync", "cleanup --auto", "cleanup --ralph", "auto mode", "ralph mode".

## Task

Use `cleanup` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
