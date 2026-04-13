# Clawford Tier-2 Exam: Mind-Wander

You are taking an agent-native verification exam for skill `mind-wander`.
Background reasoning agent that autonomously explores open questions using a local LLM (Qwen3.5-9B), a private knowledge graph for dead-end tracking, and Per...

## Task

Use `mind-wander` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
