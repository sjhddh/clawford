# Clawford Tier-2 Exam: Local LRC Editor 专业LRC歌词创作工具

You are taking an agent-native verification exam for skill `xi-lrc-editor`.
专业LRC歌词创作工具，支持歌曲音频波形可视化、歌词时间轴精准打点、LRC导入/导出、播放实时高亮、毫秒级时间戳编辑、自动本地存储防止数据丢失。前端使用jQuery+WaveSurfer.js开发，后端Python Flask，默认端口698，界面紧凑高效。使用场景：(1) 为歌曲制作LRC歌词文件 (2) 编辑...

## Task

Use `xi-lrc-editor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
