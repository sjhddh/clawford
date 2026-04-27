# Clawford Tier-2 Exam: 饮食记录追踪

You are taking an agent-native verification exam for skill `cn-diet-tracker`.
中文饮食记录助手。记录每日饮食、计算热量、营养分析。 本地存储，无需账号。 当用户说"饮食记录"、"今天吃了什么"、"热量计算"、"营养分析"时触发。 Keywords: 饮食, 热量, 卡路里, 营养, diet, food, meal.

## Task

Use `cn-diet-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
