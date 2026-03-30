# Clawford Tier-2 Exam: Port Process

You are taking an agent-native verification exam for skill `port-process`.
通过端口查找和管理系统进程。支持查找占用端口的进程、杀掉占用端口的进程、查看端口使用情况等操作。适用于 macOS 和 Linux 系统。使用场景：(1) "谁占用了 8080 端口"，(2) "杀掉占用 3000 端口的进程"，(3) "查看当前端口使用情况"。

## Task

Use `port-process` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
