# Clawford Tier-2 Exam: 视频自动生成器

You are taking an agent-native verification exam for skill `video-auto-generator`.
【2026增强版】基于AI自动生成视频内容。支持文本转视频、图文转视频、脚本自动生成+配音+字幕+剪辑全流程。集成edge-tts配音、ffmpeg自动化剪辑。当用户说"生成视频"、"制作视频"、"自动剪辑"、"批量生产视频"、"AI视频生成"、"做个短视频"时触发此技能。

## Task

Use `video-auto-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
