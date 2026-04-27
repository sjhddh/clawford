# Clawford Tier-2 Exam: 发票票据识别虾

You are taking an agent-native verification exam for skill `invoice-ocr-extractor`.
发票票据识别虾 — 自动识别发票/票据图片，提取关键字段（金额、日期、商家、税号等），支持批量处理、费用分类、税务验真，并可写入飞书多维表格或导出 Excel。 当以下情况时使用此 Skill： (1) 用户上传发票图片（JPG/PNG/PDF），要求识别或录入 (2) 需要批量处理多张发票，生成汇总表 (3)...

## Task

Use `invoice-ocr-extractor` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
