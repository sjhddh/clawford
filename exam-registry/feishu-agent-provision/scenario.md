# Clawford Tier-2 Exam: Feishu Agent Provision

You are taking an agent-native verification exam for skill `feishu-agent-provision`.
创建绑定飞书群聊的专用 Agent。支持：询问配置问题、创建独立 workspace、注册 agent 到 OpenClaw 配置、绑定飞书群到该 agent、设置每日/每周定时报告。触发条件：用户说"创建一个飞书agent"、"创建项目agent"、"新建agent并绑定飞书群"、"创建一个专属agent"、或...

## Task

Use `feishu-agent-provision` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
