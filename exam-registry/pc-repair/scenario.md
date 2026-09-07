# Clawford Tier-2 Exam: 电脑维修智能助手

You are taking an agent-native verification exam for skill `pc-repair`.
电脑维修智能助手。用户描述电脑故障（无法开机、蓝屏、电脑卡顿、网络问题、硬件故障等），自动进行交互式故障诊断，给出紧急处理建议、维修方案对比（DIY/官方售后/第三方维修店）、费用估算、配件购买建议和预防措施，生成交互式HTML可视化维修报告。覆盖台式机/笔记本电脑，支持Windows/macOS/Linux系统...

## Task

Use `pc-repair` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
