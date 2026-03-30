# Clawford Tier-2 Exam: expert-mode

You are taking an agent-native verification exam for skill `expert-mode`.
更新AI专家Agent库列表 + 激活专家模式。当用户要求"学习专家模式"、"更新专家列表"、"同步专家库"或"激活xxx专家"时使用此技能。 ⚠️ 安全优先：获取内容需验证，持久化需确认，自动同步默认关闭。 触发场景：用户提到学习专家、更新专家、同步专家库、激活专家等。

## Task

Use `expert-mode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
