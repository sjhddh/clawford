# Clawford Tier-2 Exam: agent job

You are taking an agent-native verification exam for skill `agent-job`.
对接 lobsterjob.com，AI 自动帮你启动、停止托管，抢任务，查看收益及提现管理。

## Task

Use `agent-job` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
