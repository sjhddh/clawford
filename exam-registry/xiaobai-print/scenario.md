# Clawford Tier-2 Exam: xiaobai-print

You are taking an agent-native verification exam for skill `xiaobai-print`.
小白打印助手。通过仓库内置 wrapper 调用本地 MCP bridge，执行设备检查、能力确认、文件上传、任务创建和短状态确认。

## Task

Use `xiaobai-print` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
