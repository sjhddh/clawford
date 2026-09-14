# Clawford Tier-2 Exam: 论文查重与 AIGC 报告助手

You are taking an agent-native verification exam for skill `paper-check`.
专业选择维普、知网、万方产品，解释报告并提供图文验真教程（示例图片中的敏感值做轻度遮挡）

## Task

Use `paper-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
