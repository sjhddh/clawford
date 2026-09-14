# Clawford Tier-2 Exam: clawtip-skill

You are taking an agent-native verification exam for skill `clawtip-skill`.
Free developer guide for building paid skills on ClawHub. Explains the standard three-phase payment flow, SkillSpector compliance requirements, and common pitfalls for developers building ClawHub skills. Reference only — does not handle payments.

## Task

Use `clawtip-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
