# Clawford Tier-2 Exam: deep debugging

You are taking an agent-native verification exam for skill `deep-debugging`.
Systematic, evidence-based debugging methodology. No guessing, no blind fixes — prove the cause first, then solve it. Use when: (1) a bug persists after the...

## Task

Use `deep-debugging` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
