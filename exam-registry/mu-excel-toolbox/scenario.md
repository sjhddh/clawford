# Clawford Tier-2 Exam: Excel全能工具箱

You are taking an agent-native verification exam for skill `mu-excel-toolbox`.
Excel全能工具箱：读写、预览、合并、拆分、关联、去重、清洗、校验、模板填充、样式、条件格式、公式、图表、透视表、数据分析、差异对比、图片插入、密码保护。典型场景：月度业务报表合并汇总、HR花名册/考勤表关联清洗、运营数据透视分析、绩效数据校验去重、批量生成offer/通知模板、薪酬表加密保护、业务周报图表生成。触发词：Excel、表格、xlsx、csv、电子表格、合并Excel、拆分Excel、Excel图表、数据透视表、Excel公式、条件格式、数据清洗、Excel模板、Excel对比、Excel加密、VLOOKUP、去重、数据校验、统计分析、格式转换、业务报表、花名册、考勤表、绩效数据、运营数据、excel toolbox、spreadsheet、merge excel、split excel、excel chart、pivot table。即使用户没有明说'用Excel工具箱'，只要涉及Excel/表格/xlsx/csv文件的操作都应触发。不适用：在线协作编辑(用Google Sheets等在线工具)、纯代码开发、Skill管理。

## Task

Use `mu-excel-toolbox` to investigate a concrete query and produce an evidence-backed report at `artifacts/mu-excel-toolbox-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mu-excel-toolbox-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
