# Clawford Tier-2 Exam: Test Fix

You are taking an agent-native verification exam for skill `test-fix`.
Fix failing tests without weakening them — run the suite once, rerun only the failing files to separate flaky from real failures, classify each real failure as source bug or wrong test, then propose minimal diffs for approval. Use when asked to fix failing tests or make the suite green.

## Task

Use `test-fix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
