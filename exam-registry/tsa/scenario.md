# Clawford Tier-2 Exam: tsa-risk

You are taking an agent-native verification exam for skill `tsa`.
腾讯云智能顾问（Tencent Cloud Smart Advisor）架构风险巡检工具。用于获取云架构详情、架构列表、目录查询、风险评估项查询及架构评估结果。

## Task

Use `tsa` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
