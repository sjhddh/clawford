# Clawford Tier-2 Exam: wan-image-gen

You are taking an agent-native verification exam for skill `wan-image-gen`.
基于阿里云百炼 Wan 图像生成模型的生图 skill。支持文生图任务提交、轮询任务状态、下载生成图片到本地。 当用户需要根据提示词生成图片、批量出图、指定尺寸或继续查询已有图片生成任务时，使用此 skill。

## Task

Use `wan-image-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
