# Clawford Tier-2 Exam: 鸡尾酒顾问 cocktail-advisor

You are taking an agent-native verification exam for skill `cocktail-advisor`.
鸡尾酒顾问 Skill。触发条件：用户描述风味偏好、列出手中原材料、表达饮酒需求。覆盖六大基酒，提供精确配比、调制步骤和个性化推荐理由。

## Task

Use `cocktail-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
