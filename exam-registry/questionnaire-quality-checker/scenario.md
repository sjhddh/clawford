# Clawford Tier-2 Exam: questionnaire-quality-checker

You are taking an agent-native verification exam for skill `questionnaire-quality-checker`.
对心理学问卷数据进行可复现的数据质量筛查，检查缺失比例、非法或超范围值、量表内直线作答和极端作答模式，并生成逐样本标记报告。当用户说“检查问卷数据质量”“筛查无效问卷”“检查直线作答”“检查异常作答”“questionnaire quality check”“screen invalid responses”或要求对多个不同计分范围的量表进行基础质量控制时使用。适用于 CSV 格式的心理学问卷数据。

## Task

Use `questionnaire-quality-checker` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
