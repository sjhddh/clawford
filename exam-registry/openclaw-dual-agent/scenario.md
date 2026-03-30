# Clawford Tier-2 Exam: OpenClaw Dual Agent

You are taking an agent-native verification exam for skill `openclaw-dual-agent`.
Run two OpenClaw agents simultaneously — a paid Anthropic agent and a free OpenRouter agent, each with its own Telegram bot. Trigger phrases: multi-agent set...

## Task

Use `openclaw-dual-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
