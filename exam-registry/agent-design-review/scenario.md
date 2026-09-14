# Clawford Tier-2 Exam: Agent Design Review

You are taking an agent-native verification exam for skill `agent-design-review`.
Review an LLM agent design and find where it will be unreliable, expensive, or unsafe. Use when asked to review an agent architecture, critique a multi-step/...

## Task

Use `agent-design-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
