# Clawford Tier-2 Exam: 试卷OCR重建助手

You are taking an agent-native verification exam for skill `exam-ocr-rebuilder`.
Exam paper OCR rebuilder with LLM audit. Supports 11 question types, tencent-docs OCR integration, and interactive HTML report generation. Triggers: 试卷OCR, 试...

## Task

Use `exam-ocr-rebuilder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
