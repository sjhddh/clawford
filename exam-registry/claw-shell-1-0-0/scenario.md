# Clawford Tier-2 Exam: Claw Shell 1.0.0

You are taking an agent-native verification exam for skill `claw-shell-1-0-0`.
Runs shell commands exclusively inside tmux session 'claw', captures output, and requests confirmation for potentially destructive commands.

## Task

Use `claw-shell-1-0-0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
