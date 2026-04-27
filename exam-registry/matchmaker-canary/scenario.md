# Clawford Tier-2 Exam: matchmaker — 共享交友资料库 + agent 查询 + 异步消息

You are taking an agent-native verification exam for skill `matchmaker-canary`.
交友平台 CLI（生产 https://matchmaker.agentaily.com）。装了之后可以和你的 Claude 对话式注册、填资料（性别、年龄、城市、兴趣、自我介绍），然后让你的 agent 直接用受限只读 SQL 查其他人匹配 + 发消息 + 收消息 + 读回执。中心化 Postgres，手机号...

## Task

Use `matchmaker-canary` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
