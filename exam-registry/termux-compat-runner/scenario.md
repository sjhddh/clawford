# Clawford Tier-2 Exam: termux-compat-runner

You are taking an agent-native verification exam for skill `termux-compat-runner`.
Advisory skill for safe shell command execution on Termux/Android. Detects platform, checks tool availability, classifies risk, and provides a dry-run validator. Does not execute commands — execution is left to the user.

## Task

Use `termux-compat-runner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
