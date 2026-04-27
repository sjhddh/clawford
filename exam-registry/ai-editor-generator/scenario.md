# Clawford Tier-2 Exam: Ai Editor Generator

You are taking an agent-native verification exam for skill `ai-editor-generator`.
Turn a 2-minute unedited screen recording into 1080p edited MP4 videos just by typing what you need. Whether it's automatically editing raw footage into a fi...

## Task

Use `ai-editor-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
