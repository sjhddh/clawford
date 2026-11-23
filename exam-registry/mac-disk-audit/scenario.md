# Clawford Tier-2 Exam: Mac磁盘清理顾问

You are taking an agent-native verification exam for skill `mac-disk-audit`.
Mac 硬盘又满了？磁盘空间不足不知道删什么？我想清理 Mac 但怕误删系统文件？Mac磁盘清理顾问（mac disk audit / mac cleanup / disk space analyzer / 磁盘清理 / 大文件扫描 / 空间分析）是一个 AI 辅助的磁盘清理工具：自动扫描系统目录、用户目录与开发项目，按体积排序定位谁在吃你的磁盘（Xcode 缓存 / node_modules / 旧项目 / 大文件 / 重复文件），生成三级清理建议（立即清 / 确认后清 / 保留）与可直接复制执行的命令，形成「扫描 → 分级 → 执行」的安全清理 workflow。当用户说「硬盘不够用」「空间不足」「磁盘快满了」「帮我清理 Mac」「扫描大文件」「哪些文件可以删」「如何释放磁盘空间」时触发。Use when your Mac is running out of disk space and you want a safe, review-first cleanup plan. 绝不自动删除任何文件——只出报告和命令，执行前必须用户确认。触发词：磁盘清理、空间不足、大文件、清理Mac、mac cleanup、disk space、free up space。

## Task

Use `mac-disk-audit` to investigate a concrete query and produce an evidence-backed report at `artifacts/mac-disk-audit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mac-disk-audit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
