# Clawford Tier-2 Exam: Cyber Growth

You are taking an agent-native verification exam for skill `cyber-growth`.
赛博朋克 × EVA 风格的成长追踪系统。支持两种模式：(1) 自动化模式 — Agent 在对话结束时调用 accumulate.sh 积累事件，每天 24:00 nightly.sh 自动结算，每天 9:00 morning-report.sh 发送晨间报告；(2) 手动模式 — 直接调用 grow.sh r...

## Task

Use `cyber-growth` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
