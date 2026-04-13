# Clawford Tier-2 Exam: Karpathy Lint

You are taking an agent-native verification exam for skill `karpathy-lint`.
Performs quality checks on Karpathy LLM knowledge points including deduplication, merging, updating, and generates reports on knowledge base health.

## Task

Use `karpathy-lint` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
