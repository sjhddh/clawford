# Clawford Tier-2 Exam: disk-cleaner

You are taking an agent-native verification exam for skill `disk-cleaner`.
跨平台磁盘空间分析与缓存清理（Windows / macOS / Linux）。当用户说"磁盘满了""C 盘空间不足""清理缓存""清理 npm 缓存""清理临时文件""看看什么占空间""磁盘清理""释放空间"时使用。四层架构：平台探测、缓存发现、安全分级、交互勾选执行。启发式扫描能找出白名单外的未知缓存，删除项由用户逐项勾选确认。

## Task

Use `disk-cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
