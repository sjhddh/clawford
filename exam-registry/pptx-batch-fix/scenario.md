# Clawford Tier-2 Exam: PPTX批量格式化修复

You are taking an agent-native verification exam for skill `pptx-batch-fix`.
PPT/PPTX 批量格式化修复工具，涵盖两大核心能力：(1) 字号统一修复 — 全片扫描文字字号，低于阈值的统一调至16pt（可配置），自动启用换行防止溢出，修正超出版面边界的形状；(2) 页码批量删除 — 多格式页码检测与删除（X/Y、纯数字、幻灯片编号占位符），不误删章节标记。 触发场景：修改PPT字号/调...

## Task

Use `pptx-batch-fix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
