# Clawford Tier-2 Exam: doc-reader

You are taking an agent-native verification exam for skill `doc-reader`.
本地文档读取技能。从 PDF / DOCX / TXT 抽取纯文本与结构（标题/段落/表格），供摘要、检索、结构化抽取下游使用。内置 doc_extract 脚本（优先本地库，无依赖时回退提示）。适用于合同/简历/报告解析、知识入库、长文预处理。

## Task

Use `doc-reader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
