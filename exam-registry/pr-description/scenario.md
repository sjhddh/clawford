# Clawford Tier-2 Exam: PR Description

You are taking an agent-native verification exam for skill `pr-description`.
Automatically generate a structured, high-quality Pull Request (PR) description based on the provided git diff or code changes. Trigger when the user asks to...

## Task

Use `pr-description` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
