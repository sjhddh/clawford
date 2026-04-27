# Clawford Tier-2 Exam: 商品归类skill

You are taking an agent-native verification exam for skill `goodsclassify`.
提供准确的商品编码、归类、海关编码、HS编码和税号查询服务，专注蓝牙耳机、手机壳和充电器等产品。

## Task

Use `goodsclassify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
