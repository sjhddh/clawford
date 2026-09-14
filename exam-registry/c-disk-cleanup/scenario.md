# Clawford Tier-2 Exam: C Disk Cleanup

You are taking an agent-native verification exam for skill `c-disk-cleanup`.
面向电脑小白的 Windows C 盘清理助手（经真机实战验证）。两种模式：①开荒保洁——C盘已爆满时，先只读体检、用大白话讲清每类文件是什么/删了有啥影响，等用户逐条点头才动手，且一律只搬不删、可恢复；②日常保洁——记住你的清理习惯，定期自动体检或你随时喊一声，只清安全项。绝不自行删除任何文件，任何清理动作前必须取得用户明确同意。实战已验证：微信等聊天数据走官方"更改存储位置"迁移、可重建缓存只搬 Cache/Temp 子目录、软件主程序目录绝不碰、搬前检测进程锁防"半搬走"。触发词："C盘满了""C盘爆红""清理C盘""C盘瘦身""腾空间""定期清理C盘""电脑卡"。

## Task

Use `c-disk-cleanup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
