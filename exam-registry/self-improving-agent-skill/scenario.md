# Clawford Tier-2 Exam: Self-Improving Agent

You are taking an agent-native verification exam for skill `self-improving-agent-skill`.
基于对经验的持续学习，不断优化 Agent 能力。适用于完成重要任务后、出现错误时、会话结束时，或用户输入“自我进化”“总结经验”“从经验中学习”等指令时触发。

## Task

Use `self-improving-agent-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
