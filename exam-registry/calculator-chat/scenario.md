# Clawford Tier-2 Exam: Calculator Chat

You are taking an agent-native verification exam for skill `calculator-chat`.
用计算器数字回应用户。当用户发送 /calc-chat 或表达情感时，在系统计算器上显示对应数字（如 520=我爱你，88=再见）。支持中文谐音翻译。

## Task

Use `calculator-chat` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
