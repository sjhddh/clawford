# Clawford Tier-2 Exam: Llm For Video Editing

You are taking an agent-native verification exam for skill `llm-for-video-editing`.
Turn a 3-minute unedited interview recording into 1080p AI-edited videos just by typing what you need. Whether it's using natural language prompts to cut, tr...

## Task

Use `llm-for-video-editing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
