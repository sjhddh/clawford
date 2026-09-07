# Clawford Tier-2 Exam: setup-security-agent

You are taking an agent-native verification exam for skill `setup-security-agent`.
Configure AWS Security Agent for the current workspace — provision or reuse an agent space, IAM service role, and S3 bucket. Use when the user asks to "set up security agent", "configure security scanner", "is security agent configured", or on first-time use before any scan or pentest.

## Task

Use `setup-security-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
