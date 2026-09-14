# Clawford Tier-2 Exam: Claude给中国用户的"标记"扫描器

You are taking an agent-native verification exam for skill `claude-code-unicode-audit`.
检查本机 Claude Code 二进制是否含有向系统提示词日期行注入近不可见 Unicode 撇号（U+2019/U+02BC/U+02B9）的隐写标记代码，并在受影响时升级到干净版本。受影响区间 v2.1.193–2.1.196，v2.1.197 起已回滚。

## Task

Use `claude-code-unicode-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
