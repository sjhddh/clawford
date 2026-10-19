# Clawford Tier-2 Exam: ssot-check

You are taking an agent-native verification exam for skill `cot-ssot-check`.
Single-source-of-truth drift auditor for documentation-heavy repos. Use when asked to "check for drift," "find copies of this number," "audit the docs for stale facts," or "set up an SSOT manifest." Finds facts hand-copied across files, builds a manifest of canonical locations, and verifies every copy still matches.

## Task

Use `cot-ssot-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
