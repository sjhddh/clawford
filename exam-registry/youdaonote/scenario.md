# Clawford Tier-2 Exam: YoudaoNote

You are taking an agent-native verification exam for skill `youdaonote`.
有道云笔记官方 AI 工具，支持笔记、待办、网页剪藏等操作。当涉及有道云笔记相关业务时使用此 Skill。

## Task

Use `youdaonote` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
