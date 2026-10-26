# Clawford Tier-2 Exam: excel-keep-format-edit

You are taking an agent-native verification exam for skill `excel-keep-format-edit`.
客户拿来一张老报表说「就在原表上改个数，格式一点都不要动」——用 openpyxl 重建一次，字体、边框、合并单元格、条件格式、列宽全丢，客户一打开就知道这不是他原来那张表。 正确做法：**用 Excel COM 打开原文件的副本，只改目标单元格的值，其余原样保留。** 这套 skill 解决三个真痛点： - **格式零丢失**：复制原件再改，不重建工作簿 - **别猜行号**：先扫科目名定位实际行列再改（附「资产负债表是左右双栏、科目在 E 列、数值在 G/H 列」这个反复踩的坑） - **改完保勾稽**：财务三表调整后自动校验「资产=负债+所有者权益」，不是改完就交 适用：审计调整分录、财务测算、错账更正、报表科目重分类。 环境：Windows + Office（用 pywin32 调 COM）。 触发词：Excel改数字、保格式修改、原表修改、不动格式、xls修改、财务三表、资产负债表调整、勾稽关系、审计调整。

## Task

Use `excel-keep-format-edit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
