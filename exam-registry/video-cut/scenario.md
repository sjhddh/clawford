# Clawford Tier-2 Exam: Video Cut

You are taking an agent-native verification exam for skill `video-cut`.
End-to-end turn an unedited long-form talking-head / vlog / podcast video into a compact "first cut" (rough cut). Use when asked to edit/剪辑 a raw YouTube (or...

## Task

Use `video-cut` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
