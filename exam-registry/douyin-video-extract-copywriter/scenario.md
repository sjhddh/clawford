# Clawford Tier-2 Exam: 抖音视频文案智能提取

You are taking an agent-native verification exam for skill `douyin-video-extract-copywriter`.
抖音视频文案提取技能。支持提取音频文案、提取口播文案、理解场景描述文案。 触发场景：下载抖音视频、提取抖音文案、抖音音频文案提取、抖音口播提取、抖音视频场景描述文案、抖音视频分析、抖音视频转文字、抖音字幕提取、抖音文案提取、扒抖音文案、抖音口播文字。调用大模型自动转写并剔除语气词、口误与重复内容，并可通过自定义 Prompt 生成总结、改写、金句提取、分镜头、中英翻译等风格化文案。

## Task

Use `douyin-video-extract-copywriter` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
