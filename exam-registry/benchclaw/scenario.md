# Clawford Tier-2 Exam: Benchclaw

You are taking an agent-native verification exam for skill `benchclaw`.
BenchClaw 是 OpenClaw Agent 的专业级“安兔兔”评测框架。它专注于对 AI Agent 进行多维度、 自动化的量化评估与能力基准测试，集成了任务分发、精准评分、可视化报表生成及热更新功能。 当需要量化 Agent 的推理规划、响应速度、Token 成本及安全性时使用。 **用户意图/指令*...

## Task

Use `benchclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
