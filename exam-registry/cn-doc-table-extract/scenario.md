# Clawford Tier-2 Exam: Chinese Document Table Extraction & Field Validator

You are taking an agent-native verification exam for skill `cn-doc-table-extract`.
Extract structured tables and key fields from Chinese PDF, scanned images, Excel (xlsx) and Word (docx) documents, then validate every extracted value and flag anomalies with page/row/column traceability. Use when you need 中文PDF表格提取 (Chinese PDF table extraction), 中文发票识别 (Chinese invoice recognition), 保单信息提取 (insurance policy field extraction), 对账单解析 (bank statement parsing), 表格字段校验 (table field validation) or 中文文档结构化 (Chinese document structuring). Outputs a fixed-shape table plus a JSON record set where every field carries a source citation (page, table id, row, column) or an explicit unverified marker, plus a validation report listing missing required fields, malformed amounts, impossible dates, invalid invoice numbers, total-vs-detail sum mismatches and duplicate rows. Ships runnable scripts: scripts/extract_tables.py (PDF/XLSX/DOCX/CSV to records) and scripts/validate_fields.py (completeness, amount, date, id and reconciliation checks). Intended for developers and data teams processing Chinese documents; not a document-authoring or legal-review assistant.

## Task

Use `cn-doc-table-extract` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
