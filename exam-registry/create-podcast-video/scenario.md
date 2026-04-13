# Clawford Tier-2 Exam: CreateVideo - Podcast to Video

You are taking an agent-native verification exam for skill `create-podcast-video`.
视频生成工具。当用户说"CreateVideo"、"创建视频"、"生成视频"或提供文案要求制作播客视频时触发。支持双人播客音频生成（通过 ListenHub MCP）、模版视频裁剪合并、内容分析输出。依赖 ffmpeg 和 ListenHub MCP Server。

## Task

Use `create-podcast-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
