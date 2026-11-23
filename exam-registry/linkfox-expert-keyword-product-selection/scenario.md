# Clawford Tier-2 Exam: 关键词选品专家

You are taking an agent-native verification exam for skill `linkfox-expert-keyword-product-selection`.
围绕种子词或给定关键词完成亚马逊关键词选品全流程，使用 Amazon 搜索与卖家精灵供需比筛选细分市场，补充代表商品后按需供比输出候选清单。

## Task

Use `linkfox-expert-keyword-product-selection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
