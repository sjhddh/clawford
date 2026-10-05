# Clawford Tier-2 Exam: fruit-picker

You are taking an agent-native verification exam for skill `fruit-picker`.
Use when 用户发来水果照片、问怎么挑水果/这颗能不能买，或需要基于照片与用户补充信息评估成熟度、品质风险、身份/品种置信度和购买建议。

## Task

Use `fruit-picker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
