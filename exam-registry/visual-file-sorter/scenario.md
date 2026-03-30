# Clawford Tier-2 Exam: 视觉系文件分类大师 (Visual File Sorter)

You are taking an agent-native verification exam for skill `visual-file-sorter`.
自动遍历下载文件夹或桌面，利用视觉模型“看”文件内容并重命名，最后归档到指定分类目录。

## Task

Use `visual-file-sorter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
