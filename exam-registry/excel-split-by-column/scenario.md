# Clawford Tier-2 Exam: excel-split-by-column

You are taking an agent-native verification exam for skill `excel-split-by-column`.
按指定列的值把一张 Excel 大表拆分成多个工作表（单文件）或多个独立 xlsx 文件。自动检测拆分列（部门/城市/分类/状态类），处理非法 sheet 名、空值归组"未填写"，并生成拆分汇总。当用户上传大表并要求"按部门拆开"、"按城市分成多个表"、"拆分成多个文件"、"分类拆分"时触发。

## Task

Use `excel-split-by-column` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
