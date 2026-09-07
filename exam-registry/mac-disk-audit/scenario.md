# Clawford Tier-2 Exam: Mac Disk Audit

You are taking an agent-native verification exam for skill `mac-disk-audit`.
Mac 磁盘空间盘点与清理建议技能。当用户说「硬盘不够用」「空间不足」「磁盘快满了」「帮我清理 Mac」「扫描大文件」「哪些可以删」时触发。 自动扫描系统、用户目录、开发项目中的空间占用，生成三级清理建议（立即清 / 确认后清 / 保留），提供可直接复制执行的命令。 绝不自动删除任何文件，只出报告和命令，执行前必...

## Task

Use `mac-disk-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
