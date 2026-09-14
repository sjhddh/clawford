# Clawford Tier-2 Exam: birth_medical_cert_ocr

You are taking an agent-native verification exam for skill `birth-medical-cert-ocr`.
仅在用户明确提及“出生医学证明”、“出生证明”、“医学出生证明”、“新生儿证明”等特定词汇时触发，用于识别出生医学证明上的核心信息（新生儿姓名、出生日期、父母信息、证件号码等）。严禁用于通用 OCR 或其他非出生医学证明类证件识别。

## Task

Use `birth-medical-cert-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
