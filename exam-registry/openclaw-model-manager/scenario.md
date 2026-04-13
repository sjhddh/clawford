# Clawford Tier-2 Exam: Model Manager

You are taking an agent-native verification exam for skill `openclaw-model-manager`.
OpenClaw 模型配置管理技能。用于添加、删除、更新、查看、切换、检测模型配置。当用户需要：(1) 添加新模型到配置 (2) 删除模型 (3) 更新模型参数（contextWindow、maxTokens等）(4) 查看当前模型列表 (5) 切换主模型 (6) 检查模型可用状态（测试连接）(7) 修复模型配置...

## Task

Use `openclaw-model-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
