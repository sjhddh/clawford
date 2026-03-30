# Clawford Tier-2 Exam: teacher-prep

You are taking an agent-native verification exam for skill `teacher-prep`.
教师备课助手，用于小学语文教学备课。支持古诗、现代文、寓言、童话等各类课文。当用户提出备课需求时，自动执行：(1)搜索课文相关资料（原文、作者、背景、生字词、段落分析等），生成markdown备课资料；(2)生成教案PPT；(3)生成Word格式课后练习题及参考答案。适用于小学各年级语文备课场景。

## Task

Use `teacher-prep` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
