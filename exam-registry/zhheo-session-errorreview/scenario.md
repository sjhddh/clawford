# Clawford Tier-2 Exam: 报错回顾 - 自动分析并修复工具报错

You are taking an agent-native verification exam for skill `zhheo-session-errorreview`.
当用户说「报错回顾」时，整理当前 session 中工具调用的所有报错，分析根因并自动修复，含分类/去重/压缩/淘汰机制

## Task

Use `zhheo-session-errorreview` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
