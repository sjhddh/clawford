# Clawford Tier-2 Exam: Hook System

You are taking an agent-native verification exam for skill `hook-system`.
工具钩子系统。在工具执行前后注入自定义逻辑，支持： - PreToolUse: 工具执行前调用，可修改输入或阻止执行 - PostToolUse: 工具执行后调用，可修改输出或记录日志 当用户说"添加钩子"、"hook"、"拦截工具"、"工具前后处理"时触发。 依赖：Node.js 18+

## Task

Use `hook-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
