# Clawford Tier-2 Exam: Windows-health

You are taking an agent-native verification exam for skill `windowshealth`.
Windows 文件管家与系统健康诊断（mac-health 的 Windows 原生版，供 WorkBuddy 等 Windows 端工具调用）。Always use when the user says「电脑管家」「文件整理」「C盘满了」「Windows清理」「磁盘整理」「电脑诊断」「清理一下」「哪些可以删」「系统整理」「电脑卡」「运行慢」「内存不足」「Windows 卡」「开机慢」。涉及删除或迁移时先诊断和校验，执行时保留清单与回滚线索。

## Task

Use `windowshealth` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
