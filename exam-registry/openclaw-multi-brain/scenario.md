# Clawford Tier-2 Exam: Multi-Brain Protocol

You are taking an agent-native verification exam for skill `openclaw-multi-brain`.
Runs Kimi K2.5 and GPT 5.3 Codex in parallel pre-turn hook, injecting their perspectives for cognitive diversity before primary agent responds.

## Task

Use `openclaw-multi-brain` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
