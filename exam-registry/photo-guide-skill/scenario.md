# Clawford Tier-2 Exam: Photo Guide

You are taking an agent-native verification exam for skill `photo-guide-skill`.
摄影指导技能 - 当用户上传照片并询问如何拍出类似效果、拍摄参数、后期调色等摄影相关问题时使用此技能。分析照片的视觉特征，推断拍摄参数，提供后期调色指导、照片优化建议和学习关键词。

## Task

Use `photo-guide-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
