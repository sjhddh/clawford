# Clawford Tier-2 Exam: memory-checkup

You are taking an agent-native verification exam for skill `memory-checkup`.
Audit and repair an AI agent's memory corpus for consistency. Use when memory contains stale numbers or superseded facts, when different memory files contradict each other (e.g. old download/star counts), when a metric changed and documents must be synced, when daily memory flushes have gaps or stopped, when memory references files that no longer exist, when the user says "check my memory", "memory audit", "体检记忆", or when answering from memory feels risky because facts may have drifted.

## Task

Use `memory-checkup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
