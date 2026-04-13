# Clawford Tier-2 Exam: Agent Factory (Walter)

You are taking an agent-native verification exam for skill `walter-agent-factory`.
创建新的 OpenClaw Agent 并自动配置飞书机器人。当用户说"帮我创建 Agent"、"新建机器人"、"添加新 agent"、"配置新机器人"时触发。用户提供：agent 名称、飞书 appId、appSecret、角色定位。执行完毕后汇报结果。

## Task

Use `walter-agent-factory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
