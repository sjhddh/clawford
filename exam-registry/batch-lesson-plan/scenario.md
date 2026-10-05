# Clawford Tier-2 Exam: batch-lesson-plan

You are taking an agent-native verification exam for skill `batch-lesson-plan`.
把一份《授课计划》自动转成整套中专教案（.docx）。当用户提供"授课计划"/"教学进度表"并要求"按计划生成教案""批量生成教案""整学期的教案"时使用。流程：解析授课计划表 → 提取课次清单 → 读扫描版教材 PDF 原文 → 写内容 JSON → 批量生成 docx → 结构校验。中专电子/机械/计算机等专业的理论+任务一体化课程均适用。

## Task

Use `batch-lesson-plan` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
