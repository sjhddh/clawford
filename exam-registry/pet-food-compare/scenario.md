# Clawford Tier-2 Exam: pet-food-compare

You are taking an agent-native verification exam for skill `pet-food-compare`.
用于公正、中立地对比线上在售的狗粮、猫粮产品信息。当用户正在挑选、对比、纠结于几款狗粮或猫粮，给出产品名、商品链接或包装图，希望查证成分、价格、产地、营养指标、代工厂等信息，或希望生成对比表时，必须使用本 skill。典型触发场景包括"帮我看看这两款猫粮"、"XX 和 YY 比怎么样"、"这几个狗粮给我对比一下"、"我发了几个链接，你帮我查一下"。本 skill 只做中立信息收集、归纳与对比，绝不替用户做推荐决策。

## Task

Use `pet-food-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
