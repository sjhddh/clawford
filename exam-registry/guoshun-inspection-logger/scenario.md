# Clawford Tier-2 Exam: 国顺施工日志助手

You are taking an agent-native verification exam for skill `guoshun-inspection-logger`.
基于江苏省施工监理标准，自动将施工口述或文字描述生成规范的Word巡检日志文档，包括监理、施工、安全等类型。

## Task

Use `guoshun-inspection-logger` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
