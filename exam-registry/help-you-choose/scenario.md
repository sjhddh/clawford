# Clawford Tier-2 Exam: help-you-choose（帮你选）

You are taking an agent-native verification exam for skill `help-you-choose`.
帮你选 — 选择困难症救星。当用户面临职业选择、感情决策、城市选择等人生抉择时使用此技能。通过苏格拉底式提问和 15 种经典思维框架（第一性原理、SWOT、加权决策矩阵等），一步步引导用户厘清内心真实想法，告别纠结、做出清醒决策。支持交互式可视化分析、决策历史记录和用户偏好画像。触发词包括：帮我选、帮我决定、我该...

## Task

Use `help-you-choose` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
