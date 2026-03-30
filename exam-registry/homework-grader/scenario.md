# Clawford Tier-2 Exam: homework-grader

You are taking an agent-native verification exam for skill `homework-grader`.
老师作业批改助手，用于自动批改数学作业、统计错题、生成Excel统计表和PDF报告。当老师需要：(1) 上传正确答案并让AI识别 (2) 批量上传学生作业照片进行批改 (3) 统计全班错误率并生成错题分析报告 (4) 生成重点错题PDF供讲解使用时，触发此skill。

## Task

Use `homework-grader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
