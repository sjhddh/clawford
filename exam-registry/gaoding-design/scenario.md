# Clawford Tier-2 Exam: Gaoding Design

You are taking an agent-native verification exam for skill `gaoding-design`.
稿定设计对话式设计工具。支持搜索模板、选择模板、编辑文案、预览、导出设计。覆盖海报、PPT、电商主图、名片等全场景。

## Task

Use `gaoding-design` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
