# Clawford Tier-2 Exam: Story Video Generator

You are taking an agent-native verification exam for skill `story-video-generator`.
从图片或文字描述自动生成完整视频故事。支持灵活输入（1-N张图片/纯文字/混合），可选时长和风格。当用户要求生成视频故事、视频短片、图片转视频、文字转视频时使用。

## Task

Use `story-video-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
