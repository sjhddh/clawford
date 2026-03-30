# Clawford Tier-2 Exam: A security auditing tool for third-party Claude Code Skills. Automatically pre-checks any Skill before execution to block dangerous ones, and supports manual deep audits.

You are taking an agent-native verification exam for skill `skills-security-check`.
Scan a third-party Claude Code skill for security risks before enabling it. Use when user wants to audit, check, or verify the safety of a skill.

## Task

Use `skills-security-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
