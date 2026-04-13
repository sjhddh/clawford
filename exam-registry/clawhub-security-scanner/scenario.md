# Clawford Tier-2 Exam: Skill Security Scanner

You are taking an agent-native verification exam for skill `clawhub-security-scanner`.
Audits any SKILL.md for the three most common risk patterns — permission overreach, prompt injection, and scope mismatch. Free taster. Full 7-category audit...

## Task

Use `clawhub-security-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
