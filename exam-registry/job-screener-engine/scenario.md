# Clawford Tier-2 Exam: job-screener-engine

You are taking an agent-native verification exam for skill `job-screener-engine`.
在用户拿到面试邀请或 Offer 后，对岗位机会做深度评估：六个维度 打出 A–H 等级与全局 1–5 分，输出行动建议、面试练手价值与风险提示。 触发词：'拿到 offer 了帮我看看'、'这个面试机会值不值得去'、 '帮我评估这个岗位'、'帮我对比这几个机会'、'岗位深度分析'。

## Task

Use `job-screener-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
