# Clawford Tier-2 Exam: edo-tensei

You are taking an agent-native verification exam for skill `edo-tensei`.
秽土转生（edo-tensei）：多会话上下文协同控制塔。当用户想把臃肿的当前会话（产物过多、上下文过长）拆分为多个聚焦子会话，或想把已有多个散落会话的工作空间统一纳管为可追溯的控制塔，或想跨工作空间/跨设备迁移某段子树时使用。暴露五个动词：转生（同空间拆分）、接管（同空间纳管）、导出（跨空间/跨设备打包）、导入（跨空间/跨设备落成）、设置（配置默认中转目录等）。提供细胞分裂式就地拆分、依赖 DAG 死锁检测、两阶段提交、跨工作空间导出导入（产物副本 + 命名空间防污染），以及权属溯源 SEAL。最初于 WorkBuddy 创作。

## Task

Use `edo-tensei` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
