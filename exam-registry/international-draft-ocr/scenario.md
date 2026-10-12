# Clawford Tier-2 Exam: international_draft_ocr

You are taking an agent-native verification exam for skill `international-draft-ocr`.
国际汇票 OCR 技能：仅在用户明确同意后，读取本地票据图像/PDF，上传至 Scnet OCR 服务并提取收付方信息、币种金额、到期日、付款银行及票据号码。

## Task

Use `international-draft-ocr` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
