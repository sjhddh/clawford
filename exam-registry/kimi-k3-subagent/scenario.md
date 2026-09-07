# Clawford Tier-2 Exam: kimi-k3-subagent

You are taking an agent-native verification exam for skill `kimi-k3-subagent`.
Kimi K3子Agent架构 - 两阶段批量调度、生命周期管理、限流策略。借鉴MoonshotAI/kimi-code源码，提供Python实现

## Task

Use `kimi-k3-subagent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
