# Clawford Tier-2 Exam: 电脑清理大师

You are taking an agent-native verification exam for skill `duplicate-file-cleaner`.
扫描并识别计算机中的重复文件，提供智能整理建议；当用户需要清理重复文件、释放磁盘空间或整理照片库时使用

## Task

Use `duplicate-file-cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
