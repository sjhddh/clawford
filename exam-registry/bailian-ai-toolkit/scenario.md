# Clawford Tier-2 Exam: bailian-ai-toolkit

You are taking an agent-native verification exam for skill `bailian-ai-toolkit`.
在用户明确选择阿里云百炼时，使用项目内固定版本的 bl CLI 完成生成、理解、语音、搜索和文件处理任务，并在任何本地文件上传前执行逐文件隐私检查。

## Task

Use `bailian-ai-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
