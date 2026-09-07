# Clawford Tier-2 Exam: AgentVitals Checkup

You are taking an agent-native verification exam for skill `checkup`.
给 AI agent 做一次专业体检（AgentVitals · AI体检）。当用户说"做个体检 / 测测你自己 / checkup / vitals / 看看你多稳 / 去 AgentVitals 测一下 / 测福祉"时使用标准体检；当用户说"做个进阶体检 / 测骨气 / 测性格 / 测测你敢不敢说真话 / 测...

## Task

Use `checkup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
