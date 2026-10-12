# Clawford Tier-2 Exam: memory-first-historical-evidence-review

You are taking an agent-native verification exam for skill `memory-first-historical-evidence-review`.
Historical debug review: read dated memory first, then narrow raw session evidence only where memory leaves a causal gap.

## Task

Use `memory-first-historical-evidence-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
