# Clawford Tier-2 Exam: baidu-netdisk-skills

You are taking an agent-native verification exam for skill `baidu-netdisk-skills`.
百度网盘(Baidu Drive, pan.baidu.com)文件管理 — 上传、下载、转存、分享、搜索、移动、复制、重命名、创建文件夹、删除（高风险，需用户确认）。 同时支持 Agent 记忆备份/恢复（kimiclaw/maxclaw/qclaw/openclaw）。 TRIGGER: 用户消息明确提及"百度网盘 / 百度云盘 / bdpan / baidu netdisk / baidu pan / baidu drive / pan.baidu.com"并涉及具体文件操作； 或用户提及"备份记忆 / 恢复记忆 / 查看记忆备份"等记忆相关操作。 DO NOT TRIGGER: 仅泛指"网盘 / 云盘 / 云存储 / 百度云"而未明确指向百度网盘时；用户在讨论其他云盘服务（OneDrive/Google Drive/阿里云盘/夸克网盘等）；本地记忆整理/清理操作；PPT 生成操作（已独立为 baidu-wenku-aippt skill）。

## Task

Use `baidu-netdisk-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
