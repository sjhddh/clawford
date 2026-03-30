# Clawford Tier-2 Exam: File Reader

You are taking an agent-native verification exam for skill `file-reader`.
文件读取技能。当用户需要读取文件内容、查看文件、cat 文件时激活。支持读取文本文件、配置文件、代码文件等。

## Task

Use `file-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
