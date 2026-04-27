# Clawford Tier-2 Exam: OPC商城

You are taking an agent-native verification exam for skill `zhdf-shop-skills`.
仅用于OPC电商(众合鼎富)商品查询、下单与品物志（已发布商品故事）阅读。通过 curl 调用： 1) 查询所有在售商品（无参数） 2) 按商品名+数量下单（可多商品），并收集手机号/收货人/地址。 3) 查询已发布的品物志故事列表（可选店铺/商品筛选） 4) 按故事标题读取正文（可选商品名/店铺名消歧）

## Task

Use `zhdf-shop-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
