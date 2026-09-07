# Clawford Tier-2 Exam: AI 智能家庭厨助

You are taking an agent-native verification exam for skill `chef-cooking`.
AI 智能家庭厨助。输入食材/想吃的菜/饮食偏好，自动推荐菜谱、输出烹饪步骤指导、食材替换建议、多日菜单规划、烹饪技巧问答，生成卡片式交互 HTML 报告。覆盖八大菜系+家常菜，内置 200+ 菜谱库 + 联网搜索补充。Triggers: 做什么菜, 怎么做, 菜谱, 食谱, 烹饪, 做饭, 下厨房, 今天吃什么...

## Task

Use `chef-cooking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
