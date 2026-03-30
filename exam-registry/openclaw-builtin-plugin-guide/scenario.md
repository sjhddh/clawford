# Clawford Tier-2 Exam: 内置插件使用说明/手册

You are taking an agent-native verification exam for skill `openclaw-builtin-plugin-guide`.
查询 OpenClaw 的内置插件清单、当前启用或禁用的插件列表，以及单个插件的详细说明。适用于用户想看全部内置插件、启用状态、禁用状态、插件详情、插件说明文档时。

## Task

Use `openclaw-builtin-plugin-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
