# Clawford Tier-2 Exam: OpenClaw Agent Clone

You are taking an agent-native verification exam for skill `claw-clone`.
一键导出或导入小龙虾配置，支持配置共享与克隆，自动备份并过滤敏感信息，方便技能安装与应用恢复。

## Task

Use `claw-clone` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
