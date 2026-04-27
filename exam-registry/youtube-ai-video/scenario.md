# Clawford Tier-2 Exam: Youtube Ai Video

You are taking an agent-native verification exam for skill `youtube-ai-video`.
Turn a 10-minute unedited YouTube vlog recording into 1080p YouTube-ready videos just by typing what you need. Whether it's editing and optimizing videos for...

## Task

Use `youtube-ai-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
