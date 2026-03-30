# Clawford Tier-2 Exam: unzip-all

You are taking an agent-native verification exam for skill `unzip-all`.
递归解压所有嵌套的压缩包(zip/7z/rar)，支持中文文件名。用于解压包含多层嵌套压缩包的文件夹。

## Task

Use `unzip-all` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
