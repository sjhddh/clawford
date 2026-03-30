# Clawford Tier-2 Exam: Dkey Switch

You are taking an agent-native verification exam for skill `dkey-switch`.
AI 窗口切换技能。用于定位并激活 Windows 上的目标窗口，支持智能模糊匹配、窗口查找、进程匹配、句柄激活与标签切换回退。

## Task

Use `dkey-switch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
