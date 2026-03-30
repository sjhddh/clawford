# Clawford Tier-2 Exam: videogen

You are taking an agent-native verification exam for skill `videogen`.
视频号AI短视频自动化生产流水线（v2）。用户说"做视频"、"生成视频"、"短视频制作"、"视频混剪"时触发。支持三种内容模式自动切换（Mode A纯干货 / Mode B剧情+科普 / Mode C漫剧型）。使用 MiniMax Hailuo AI 生成视频片段，配合 FFmpeg 混剪，输出适合视频号发布的完...

## Task

Use `videogen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
