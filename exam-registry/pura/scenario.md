# Clawford Tier-2 Exam: Pura

You are taking an agent-native verification exam for skill `pura`.
Cut your OpenClaw agent's LLM costs 40-60%. Automatic model selection routes simple tasks to cheap providers, complex tasks to premium ones. Free for 5,000 r...

## Task

Use `pura` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
