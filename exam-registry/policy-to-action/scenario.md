# Clawford Tier-2 Exam: policy-to-action

You are taking an agent-native verification exam for skill `policy-to-action`.
政策翻译官 —— 官话 → 人话 → 行动。把复杂政策条文转化为「能不能用、能省多少、该怎么做」的标准化报告，企业/个人通用，双输出 HTML + 可转发文本总览。

## Task

Use `policy-to-action` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
