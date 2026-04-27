# Clawford Tier-2 Exam: product-replace

You are taking an agent-native verification exam for skill `flyelep-product-replace`.
通过 Flyelep AI 工具接口将图片中的商品替换为指定商品图，同时保留原图背景及光影效果。 当用户要求替换商品主体、保留原场景换产品、保持背景不变更换展示商品时使用此技能。

## Task

Use `flyelep-product-replace` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
