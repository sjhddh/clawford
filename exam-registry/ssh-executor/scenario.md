# Clawford Tier-2 Exam: ssh-executor

You are taking an agent-native verification exam for skill `ssh-executor`.
Execute commands on remote hosts over SSH with structured discovery protocol, vault-integrated auth, and safety guardrails for remote server administration. Use when the user asks to access remote servers, inspect state, map runtime/containers/network/data, or run single commands. Supports SSH keys

## Task

Use `ssh-executor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
