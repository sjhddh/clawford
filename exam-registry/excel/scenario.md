# Clawford Tier-2 Exam: excel去重清洗

You are taking an agent-native verification exam for skill `excel`.
Excel 表格去重清洗。自动去除多余空格、全角字符转半角、标准化手机号和身份证号、按关键列（姓名/手机号/编号）去重，并生成清洗报告 sheet。当用户上传含脏数据的 xlsx/csv 并要求"去重"、"清洗数据"、"数据标准化"、"处理表格里的重复行"时触发。

## Task

Use `excel` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
