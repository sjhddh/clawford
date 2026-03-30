# Clawford Tier-2 Exam: Ai Video Prompt

You are taking an agent-native verification exam for skill `ai-video-prompt`.
AI视频Prompt构建专家。采用"首尾帧图片+视频"工作流，支持多段5秒视频拼接生成长视频（30秒/60秒）。先生成关键帧图片，再生成视频Prompt，确保段与段之间无缝衔接。针对即梦平台优化，支持全中文Prompt输出。

## Task

Use `ai-video-prompt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
