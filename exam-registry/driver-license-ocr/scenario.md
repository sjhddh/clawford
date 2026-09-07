# Clawford Tier-2 Exam: Driver License Ocr

You are taking an agent-native verification exam for skill `driver-license-ocr`.
支持识别驾驶证主/副页，从主页提取姓名、证号、准驾车型、初次领证日期及有效期等。从副页提取驾驶证副页，提取档案编号、姓名、证号、以及记录信息。

## Task

Use `driver-license-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
