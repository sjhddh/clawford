# Clawford Tier-2 Exam: AI Video Generation - 视频创作 - 聚合数据

You are taking an agent-native verification exam for skill `juhe-video-generate`.
AI视频创作。支持文生视频（文字描述生成视频）和图生视频（图片动态化），可指定分辨率、时长、宽高比，自动等待生成完成并下载视频到本地。使用场景：用户说"帮我生成一段夕阳海浪的视频"、"把这张图片生成动态视频"、"创作一段1080P的城市夜景延时视频"、"生成一个9:16竖版的产品展示短视频"、"做一段10秒的水墨...

## Task

Use `juhe-video-generate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
