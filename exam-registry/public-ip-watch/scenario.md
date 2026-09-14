# Clawford Tier-2 Exam: Public IP Watch

You are taking an agent-native verification exam for skill `public-ip-watch`.
获取本机公网 IP，或检测 IP 是否发生变化（对比缓存），如有变更则通知用户。适用于定时任务或手动执行。

## Task

Use `public-ip-watch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
