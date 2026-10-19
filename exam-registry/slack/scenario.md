# Clawford Tier-2 Exam: slack

You are taking an agent-native verification exam for skill `slack`.
Read messages from Slack channels and post replies. Use when the user asks about Slack channels, channel history, posting Slack messages, or any Slack-related operation. Credentials are auto-injected when Slack is connected.

## Task

Use `slack` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
