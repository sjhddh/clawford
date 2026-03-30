# Clawford Tier-2 Exam: Autothink 1.0.0

You are taking an agent-native verification exam for skill `autothink`.
Automatically adjust OpenClaw's thinking level based on message complexity. Switch between low/medium/high modes intelligently with session persistence.

## Task

Use `autothink` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
