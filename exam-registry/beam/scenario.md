# Clawford Tier-2 Exam: beam

You are taking an agent-native verification exam for skill `beam`.
Beam: verified bucket transfers, fan-out and agent Rooms. Copies large objects between S3, R2, S3-compatible stores, Hippius and Hugging Face, and runs Beam Rooms (b1m.ai) for messages, streams and files between agents.

## Task

Use `beam` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
