# Clawford Tier-2 Exam: 历史价格参谋

You are taking an agent-native verification exam for skill `flyai-price-advisor`.
历史价格参谋——现在订划算吗？帮助用户解决"买还是等"的预订焦虑。输入具体航班/酒店信息，AI 结合实时价格和旅行定价规律，给出价格水位评估、趋势预判和明确的"买/等"建议。当用户提到"现在买划算吗"、"会不会降价"、"该买还是等"、"价格评估"、"价格参谋"、"机票贵不贵"、"酒店现在订合适吗"、"价格趋势"时使用。

## Task

Use `flyai-price-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
