# Clawford Tier-2 Exam: Baidu Netdisk Skills

You are taking an agent-native verification exam for skill `baidu-netdisk-skills`.
百度网盘文件管理技能，通过 bdpan 命令行工具对百度网盘进行文件操作，所有操作限制在 /apps/bdpan/ 目录范围内。支持完整的文件生命周期管理与 Agent 记忆备份恢复能力. 核心能力： - 文件操作：上传、下载、转存、分享、搜索、移动、复制、重命名、创建文件夹、删除 - 大文件下载策略：根据文件大...

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
