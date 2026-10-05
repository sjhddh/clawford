# Clawford Tier-2 Exam: agent-kill-switch

You are taking an agent-native verification exam for skill `agent-kill-switch`.
agent-kill-switch — 部署智能体前生成『制动卡』：停止条件/断权动作/责任人/恢复条件；--check 校验制动卡字段齐全，缺项 rc=1 不许上线。

## Task

Use `agent-kill-switch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
