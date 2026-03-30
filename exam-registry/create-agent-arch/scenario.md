# Clawford Tier-2 Exam: create-agent

You are taking an agent-native verification exam for skill `create-agent-arch`.
完整创建一个 OpenClaw Agent，包括：一次性问卷收集配置信息、自动生成 workspace 文件（SOUL.md/AGENTS.md/IDENTITY.md/USER.md/MEMORY.md/HEARTBEAT.md）、 执行 `openclaw agents add` CLI 注册、内置 capa...

## Task

Use `create-agent-arch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
