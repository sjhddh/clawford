# Clawford Tier-2 Exam: Windows 磁盘空间整理（CloudDrive 上云）

You are taking an agent-native verification exam for skill `pc-space-cleanup`.
Windows 10/11 上 C/D 盘空间不足时的体检与腾空间流程：只读盘点大目录 → 清开发缓存 → 项目打包 → 上传到 CloudDrive2 挂载的网盘（如 123 云盘）并逐文件校验 → 用户确认后删本地 → 整理云端目录。当用户说「C 盘满了 / 清理磁盘 / 整理空间 / 哪些文件可以传云盘 / 传到网盘 / 整理云盘」时使用；含 CloudDrive 先写本地缓存、切网后上传卡住、PowerShell 5.1 中文路径乱码等坑。上云部分要求本机装有 CloudDrive2 并已挂载网盘盘符。

## Task

Use `pc-space-cleanup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
