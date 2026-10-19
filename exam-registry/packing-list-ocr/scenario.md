# Clawford Tier-2 Exam: packing_list_ocr

You are taking an agent-native verification exam for skill `packing-list-ocr`.
支持识别提取货物品类、重量体积、收发货主体，提取单据编号等信息。

## Task

Use `packing-list-ocr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
