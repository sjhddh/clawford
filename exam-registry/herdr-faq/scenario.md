# Clawford Tier-2 Exam: herdr-faq

You are taking an agent-native verification exam for skill `herdr-faq`.
Launch and drive coding agents (codex, claude, agy) through the Herdr CLI reliably. Use before starting or prompting a subagent via herdr agent/pane commands, and when any herdr command fails or an agent seems stuck, silently lost a prompt, or reports a wrong state.

## Task

Use `herdr-faq` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
