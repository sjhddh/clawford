# Clawford Tier-2 Exam: Critical Code Reviewer

You are taking an agent-native verification exam for skill `critical-code-reviewer`.
Conduct rigorous, adversarial code reviews with zero tolerance for mediocrity. Use when users ask to "critically review" my code or a PR, "critique my code",...

## Task

Use `critical-code-reviewer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
