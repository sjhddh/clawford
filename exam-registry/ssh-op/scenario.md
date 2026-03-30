# Clawford Tier-2 Exam: SSH OP

You are taking an agent-native verification exam for skill `ssh-op`.
Use the ssh-op helper script to load an SSH private key from 1Password (op) into an in-memory ssh-agent and then run ssh. Use when connecting to hosts that r...

## Task

Use `ssh-op` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
