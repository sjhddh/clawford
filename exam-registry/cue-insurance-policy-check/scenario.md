# Clawford Tier-2 Exam: 保险产品条款核查

You are taking an agent-native verification exam for skill `cue-insurance-policy-check`.
用 Cue 逐条核验保险产品的保障责任、责任免除、等待期、费率与退保损失——与同类产品客观对比，产出一份可向客户如实说明的条款理解底稿。

## Task

Use `cue-insurance-policy-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
