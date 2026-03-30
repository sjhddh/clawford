# Clawford Tier-2 Exam: Generate DOCX

You are taking an agent-native verification exam for skill `generate-docx`.
将大模型生成或修改的内容，按照对应中文文档排版国家标准与行业规范， 输出为格式严格正确的 Word (.docx) 文档。 支持 19 种文档类型，依据《Word文档类型与风格指南》全量实现所有排版规范， 包括党政公文、商业文档、学术论文、技术文档、医疗文档、营销策划、 法律文书、金融报告、工程文档等。 v4.1...

## Task

Use `generate-docx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
