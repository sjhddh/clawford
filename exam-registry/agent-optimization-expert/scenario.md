# Clawford Tier-2 Exam: Agent优化专家

You are taking an agent-native verification exam for skill `agent-optimization-expert`.
Agent 优化专家 — 自动诊断和修复 Agent 执行问题（Cron 失败、工具报错、工作流中断、性能退化）， 兼容 OpenClaw 和 Hermes Agent，自带持续自我进化能力。 Use when user asks to 系统诊断、修复 cron、优化配置、检查系统健康度、自愈修复、 诊断失败原因...

## Task

Use `agent-optimization-expert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
