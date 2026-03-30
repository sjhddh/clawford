# Clawford Tier-2 Exam: Video Understanding

You are taking an agent-native verification exam for skill `video-learn`.
视频理解与分析能力 - 让 AI 能够理解视频内容、提取关键信息。当用户要求分析视频、理解视频内容、总结视频、提取视频要点时触发此技能。

## Task

Use `video-learn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
