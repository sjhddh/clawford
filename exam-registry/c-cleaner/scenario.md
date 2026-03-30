# Clawford Tier-2 Exam: c-cleaner

You are taking an agent-native verification exam for skill `c-cleaner`.
C 盘空间分析与清理技能。用于扫描 C 盘空间使用情况，识别垃圾文件和大文件，根据用户需求执行安全清理操作。使用场景：(1) 分析 C 盘空间占用，(2) 扫描可清理的垃圾文件，(3) 识别可迁移的大型应用，(4) 执行安全清理操作，(5) 生成空间优化建议

## Task

Use `c-cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
