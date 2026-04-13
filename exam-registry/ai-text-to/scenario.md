# Clawford Tier-2 Exam: Ai Text To

You are taking an agent-native verification exam for skill `ai-text-to`.
Turn a 200-word product description into 1080p AI-generated videos just by typing what you need. Whether it's turning written scripts into ready-to-publish v...

## Task

Use `ai-text-to` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
