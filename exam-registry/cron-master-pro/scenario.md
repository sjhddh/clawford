# Clawford Tier-2 Exam: 定时大师

You are taking an agent-native verification exam for skill `cron-master-pro`.
定时大师是平台级定时系统的深度使用指南，解决"何时用心跳、何时用 cron""推送还是静默""怎么跨回合等待"等高阶决策问题。它提供 heartbeat 与 cron 的决策矩阵、payload 类型选择（agentTurn 推送 vs systemEvent 静默）、严格指令模板、自唤醒规则、时区锁定规范与历史...

## Task

Use `cron-master-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
