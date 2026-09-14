# Clawford Tier-2 Exam: alist

You are taking an agent-native verification exam for skill `alist`.
alist 全功能 API 客户端：文件系统（列表/搜索/创建/重命名/移动/复制/删除/上传/下载/目录扫描/离线下载）、存储管理、驱动管理、用户管理、元信息管理、设置管理、任务管理、索引管理、备份恢复、SSH/SFTP、审计日志、公告、2FA、SSO、刮削诊断。支持 token 自动管理和重试。

## Task

Use `alist` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
