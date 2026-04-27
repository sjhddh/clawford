# Clawford Tier-2 Exam: AI视频剪辑Skill

You are taking an agent-native verification exam for skill `ai-video-clipper`.
全自动AI视频剪辑Skill。当用户请求以下操作时触发： - "帮我剪辑视频"、"自动剪辑"、"AI剪辑视频" - "剪辑电影素材"、"批量剪辑视频"、"自动生成视频" - "视频素材自动处理"、"从素材自动生成成片" - "制作短剧集"、"剪辑短视频"、"自动导出视频" - "素材自动导入"、"视频自动添加字幕...

## Task

Use `ai-video-clipper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
