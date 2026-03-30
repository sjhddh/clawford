# Clawford Tier-2 Exam: system-repair-expert

You are taking an agent-native verification exam for skill `system-repair-expert`.
提供严格按优先级步骤诊断与解决系统、软件、配置及报错问题，结合记忆匹配、官方文档和多来源验证确保方案高效可靠。

## Task

Use `system-repair-expert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
