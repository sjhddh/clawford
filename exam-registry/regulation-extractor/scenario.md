# Clawford Tier-2 Exam: Regulation Extractor

You are taking an agent-native verification exam for skill `regulation-extractor`.
从建筑工程规范PDF中结构化提取条文并同步到飞书多维表格。支持PDF双文字层（原文+OCR）去重、纯图片PDF的RapidOCR识别、条文编号切分（含带空格编号如6. 1. 2. 3）、带圈数字转换（如6.4.④→6.4.4）、OCR错误检测、质量标记、文本清洗（去换行/页眉/符号表/中英文粘连/过长切分）。输出...

## Task

Use `regulation-extractor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
