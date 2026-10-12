# Clawford Tier-2 Exam: 食品添加剂使用记录核对（免费版）

You are taking an agent-native verification exam for skill `food-additive-usage-check-free`.
食品添加剂投料与使用台账逐行核对，免费版 6 项，使用量 ÷ 批量 与限量值逐行复算并给出超出倍数、同一产品不同批次的限量口径不一致、标签配料表与投料记录一致性、同一批次同一添加剂重复投料行、使用量与批量合计行逐列复核、关键字段缺失与日期数值非法。每条结论引用原文行号与批次，材料不足不给结论。触发词包括 食品添加剂使用记录核对、食品添加剂投料台账、GB 2760 超限量、限量值 g/kg、配料表与投料记录对不上、重复投料、食品生产企业投料记录自查。

## Task

Use `food-additive-usage-check-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
