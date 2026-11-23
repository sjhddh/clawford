# Clawford Tier-2 Exam: Retry Safety

You are taking an agent-native verification exam for skill `skillet-retry-safety`.
Use when a diff carries side effects - database writes, migrations, file mutations, network calls, payments, queue messages - to check whether running it twice is safe. Also when reviewing retry logic, crash recovery, or anything a scheduler, queue, or impatient caller might re-run. Silent when the diff touches no side-effecting surface. Read-only review. Applying the fixes belongs to expedite.

## Task

Use `skillet-retry-safety` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
