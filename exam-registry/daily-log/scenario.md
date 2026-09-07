# Clawford Tier-2 Exam: Daily Log

You are taking an agent-native verification exam for skill `daily-log`.
每日日记生成技能。触发时机：每次会话结束前或完成重要任务后。输出位置：memory/daily/YYYY-MM/YYYY-MM-DD.md。使用方法：加载 skill 后读取 references/spec.md 获取详细规范。

## Task

Use `daily-log` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
