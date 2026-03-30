# Clawford Tier-2 Exam: wan-video-gen

You are taking an agent-native verification exam for skill `wan-video-gen`.
基于阿里云百炼 Wan 文生视频模型的视频生成 skill。支持提交视频生成任务、轮询任务状态、下载生成视频到本地。 当用户需要根据提示词生成视频、继续查询已有视频生成任务，或用 Wan 系列模型生成带声/无声视频时，使用此 skill。

## Task

Use `wan-video-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
