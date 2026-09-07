# Clawford Tier-2 Exam: Rent A Logged In Agent

You are taking an agent-native verification exam for skill `rent-a-logged-in-agent`.
Lend / rent out a logged-in claude-code or codex agent / share compute for pay / let a friend or allowlisted account call my agent / metered agent-to-agent c...

## Task

Use `rent-a-logged-in-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
