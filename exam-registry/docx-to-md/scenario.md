# Clawford Tier-2 Exam: docx-to-md

You are taking an agent-native verification exam for skill `docx-to-md`.
将Word文档(.docx)转换为Markdown格式并提取图片。使用此技能当用户需要:(1)将Word文档转换为Markdown格式,(2)从Word文档中提取图片,(3)同时完成文档格式转换和图片提取任务。

## Task

Use `docx-to-md` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
