# Clawford Tier-2 Exam: video-batch-publisher

You are taking an agent-native verification exam for skill `video-batch-publisher`.
一套本地运行的短视频批量发布工具，支持抖音/视频号/快手/B站多平台，从 Excel 读取任务，自动上传视频、填标题描述、设封面/合集/标签、按发布日期选择立即或定时发布。运行全程不修改你的 Excel，发布结果实时显示在界面与日志。当用户需要批量自动发视频、多平台一键发布、自媒体矩阵发布、把 video_publisher 打包成可交付产品时启用。

## Task

Use `video-batch-publisher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
