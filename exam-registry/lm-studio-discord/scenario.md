# Clawford Tier-2 Exam: LM Studio Discord Bot

You are taking an agent-native verification exam for skill `lm-studio-discord`.
Connect a local LM Studio model directly to Discord as a lightweight chat bot. Use when you want to expose a local LLM (running via LM Studio on CPU) to Disc...

## Task

Use `lm-studio-discord` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
