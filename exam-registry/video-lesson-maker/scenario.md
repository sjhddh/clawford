# Clawford Tier-2 Exam: 视频主题凝练及制作

You are taking an agent-native verification exam for skill `video-lesson-maker`.
基于一篇文档（教材/课件/科普文章）凝练教学视频主题，并用白板手绘动画 + 云希配音 + 同步字幕，批量制作科普/教学视频。当用户需要从文档拆出视频点、写口播脚本、生成 手绘线稿、做白板动画渲染、用 edge-tts 配音、重建同步字幕并烧录成片时使用。触发词： 教学视频、科普视频、视频主题凝练、白板动画、配音字幕、课程视频制作、把文档做成视频。

## Task

Use `video-lesson-maker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
