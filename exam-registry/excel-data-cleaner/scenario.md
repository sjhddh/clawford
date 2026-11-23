# Clawford Tier-2 Exam: excel-data-cleaner

You are taking an agent-native verification exam for skill `excel-data-cleaner`.
This skill should be used when the user provides a raw spreadsheet or CSV and needs data cleaning and statistics. Trigger phrases include '数据清洗', '去重补空', '异常值处理', 'Excel 清洗', '透视统计', '这份表帮我整理分析一下'. It profiles the data, applies deterministic cleaning via script (deduplication, missing value handling, outlier detection), and produces a cleaned file plus a statistics report with conclusions.

## Task

Use `excel-data-cleaner` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
