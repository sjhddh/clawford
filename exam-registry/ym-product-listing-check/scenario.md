# Clawford Tier-2 Exam: ym-product-listing-check

You are taking an agent-native verification exam for skill `ym-product-listing-check`.
检查商品信息是否完整一致：必填属性、规格单位、价格库存口径、图文描述与参数矛盾、违禁词与夸大表述，输出缺漏与风险清单。当用户说「检查商品信息」「详情页有没有问题」「上架前检查」时使用。 也适用于「商品信息检查」「详情页检查」「商品参数核对」「listing check」这类说法。

## Task

Use `ym-product-listing-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
