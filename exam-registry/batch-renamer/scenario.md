# Clawford Tier-2 Exam: Batch Renamer

You are taking an agent-native verification exam for skill `batch-renamer`.
批量文件重命名工具，支持多种命名模式、正则表达式、预览和撤销功能。适用于需要批量整理文件的场景，如照片整理、文档归档、下载文件重命名等。

## Task

Use `batch-renamer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
