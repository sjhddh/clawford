# Clawford Tier-2 Exam: 小河狸发票助手

You are taking an agent-native verification exam for skill `invoice-assistant`.
读取并分析本机“小河狸发票助手”软件中的数据。当用户要求连接小河狸发票助手、查询发票台账或明细、选择公司、统计进销项、分析客户/供应商/商品排行、查看月度开票趋势、汇总税额，或查询已归档电子发票附件时使用。通过应用的 localhost Skill API 在本机处理数据。
当前版本主要用于只读提取数据，不支持通过智能体导入、修改或删除发票数据。`open-attachment` 只会在本机调用系统默认程序打开已归档的 PDF/OFD/XML 文件，不会把文件内容上传到智能体或云端。

## Task

Use `invoice-assistant` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
