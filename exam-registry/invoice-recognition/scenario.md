# Clawford Tier-2 Exam: 发票识别

You are taking an agent-native verification exam for skill `invoice-recognition`.
支持增值税发票、普通发票、区块链发票等多种票据的OCR识别与信息提取；自动完成票据类型分类、关键字段提取、格式校验；当用户需要识别发票内容、提取发票信息、校验发票格式时使用

## Task

Use `invoice-recognition` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
