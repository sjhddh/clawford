# Clawford Tier-2 Exam: VPS Agent Migration

You are taking an agent-native verification exam for skill `vps-agent-migration`.
将本地 OpenClaw 子 Agent 迁移到 VPS 上运行。包括：rsync 复制文件、配置 Discord Bot、添加 bindings 路由、禁用本地账号避免冲突。使用场景：当需要将本地的 creative/dev/qa/strategist/pojun 等子 Agent 迁移到远程 VPS 时使用此...

## Task

Use `vps-agent-migration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
