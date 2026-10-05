# Clawford Tier-2 Exam: 多项目报价对比看板（Multi-Project Quote Board）

You are taking an agent-native verification exam for skill `quotationalyasize`.
多项目（同批供应商、同一询价口径）报价对比看板生成器，输出「中英双语可切换的自包含 HTML 看板 + 结构一致的 Excel」。适用于一次询价覆盖 2 个及以上子项目，需同时呈现回标状态、逐项目明细、工期门槛判定、条款对比、待澄清清单、分项目价格排序与「满足工期前提下价格最低优先」的定标建议，且**明确不做跨项目合计**的场景。数据层与渲染层严格分离，HTML 与 Excel 共用同一份数据层，口径永不发叉。

## Task

Use `quotationalyasize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
