# Clawford Tier-2 Exam: Huo15 Edit

You are taking an agent-native verification exam for skill `huo15-edit`.
精确改代码 — 先读后改、精确匹配、最小化 diff、改后自检。借鉴 Claude Code 的 Edit 工具纪律,杜绝整文件重写与误伤。

## Task

Use `huo15-edit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
