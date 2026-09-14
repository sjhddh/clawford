# Clawford Tier-2 Exam: product-color-change

You are taking an agent-native verification exam for skill `flyelep-product-color-change`.
通过 Flyelep AI 工具接口智能识别图片中的商品并进行换色处理。 当用户要求修改商品颜色、保持商品不变只换配色、生成同款不同颜色展示图时使用此技能。

## Task

Use `flyelep-product-color-change` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
