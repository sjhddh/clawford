# Clawford Tier-2 Exam: Nm Abstract Hook Authoring

You are taking an agent-native verification exam for skill `nm-abstract-hook-authoring`.
Guide for creating Claude Code hooks with security-first design. Use for validation, logging, and policy enforcement

## Task

Use `nm-abstract-hook-authoring` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
