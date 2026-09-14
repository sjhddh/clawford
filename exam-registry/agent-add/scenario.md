# Clawford Tier-2 Exam: Agent Add

You are taking an agent-native verification exam for skill `agent-add`.
可能是最好的新增 agent 的技能！ 用 AI 新建 agent 往往会碰到各种不可预测的情况，md 文档混乱，目录混乱等等。 但 openclaw 其实已经建立了一整套建立 新agent 的终端命令，能规范的配置 md文件 和 workspace。 这个技能可以让 AI 严格按 OpenClaw 官方规范创建...

## Task

Use `agent-add` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
