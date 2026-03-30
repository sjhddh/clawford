# Clawford Tier-2 Exam: AI MEDIAKIT VIDEO EDIT

You are taking an agent-native verification exam for skill `ai-mediakit-videoedit`.
AI 视频智能剪辑 Skill。输入视频文件路径（支持多个）、可选弹幕文件路径、可选字幕文件路径， 结合弹幕和字幕内容理解视频语境，根据用户剪辑诉求（如"截取所有高能时刻"、 "剪出讲解xxx的部分"）自动提取对应时间段、拼接并添加转场效果，最终用 FFmpeg 合成输出视频。 当用户提及"视频剪辑"、"根据弹幕...

## Task

Use `ai-mediakit-videoedit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
