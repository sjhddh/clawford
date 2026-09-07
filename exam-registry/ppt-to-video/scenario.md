# Clawford Tier-2 Exam: Ppt To Video

You are taking an agent-native verification exam for skill `ppt-to-video`.
将 PPT/PPTX 文件转换为带背景音乐的 MP4 视频。 支持智能时长（封面1.5s/正文按180字分）、翻页动画（上翻/对角线）、正文页打字机文字渐入效果。 触发词："PPT转视频"、"PPT生成视频"、"PPT加音乐"、"将PPT做成视频"、"PPT to video"。

## Task

Use `ppt-to-video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
