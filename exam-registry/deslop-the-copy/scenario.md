# Clawford Tier-2 Exam: Deslop the Copy

You are taking an agent-native verification exam for skill `deslop-the-copy`.
Strip AI-generated writing patterns and make text sound like a real person wrote it. Use this skill whenever the user asks to deslop, de-slop, clean up, huma...

## Task

Use `deslop-the-copy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
