# Clawford Tier-2 Exam: Create Agent

You are taking an agent-native verification exam for skill `openclaw-create-agent`.
创建新的 OpenClaw Agent 及其 workspace。包含四个阶段：信息收集、 workspace 构造、系统注册、重启验证。 适用场景：新员工飞书配对后创建对应 Agent、新增功能型专业 Agent。 触发词：创建 agent、新建 agent、添加 agent、新员工配对后创建、 新增专业 ag...

## Task

Use `openclaw-create-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
