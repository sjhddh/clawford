# Clawford Tier-2 Exam: AIGC商品图生成

You are taking an agent-native verification exam for skill `linkfox-aigc-imagegen-product`.
商品图生成（非服饰类）。支持单张或套图：白底主图、场景图、特写图、卖点版式图、A+详情页图。单张单类型直接出图；多张多类型自动编排规划。用户说"做套图""做白底图""做场景图""做卖点图""做A+图""做特写图"时触发。纯图片编辑操作走 linkfox-aigc-imagegen。

## Task

Use `linkfox-aigc-imagegen-product` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
