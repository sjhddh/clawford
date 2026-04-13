# Clawford Tier-2 Exam: Agent Runtime

You are taking an agent-native verification exam for skill `agent-runtime`.
智能体运行时系统。整合工具注册、权限控制、Hook拦截、上下文压缩、Usage追踪的完整Agent运行时。 当用户说"创建Agent"、"运行Agent"、"Agent Runtime"、"子代理"时触发。

## Task

Use `agent-runtime` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
