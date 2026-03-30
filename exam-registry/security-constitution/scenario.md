# Clawford Tier-2 Exam: Security Constitution

You are taking an agent-native verification exam for skill `security-constitution`.
为 OpenClaw 提供企业级安全保障的四级风险控制技能。 - 四级风险评估（L1-L4）：L1直接拒绝，L2密码确认，L3记录放行，L4直接放行 - 密码二次验证：敏感操作需主人确认 - 操作日志审计：记录所有操作供审计 - 绝对锁定：改密码/改owner/绕过安全机制均无法执行 ⚠️ 此技能是 AGENTS...

## Task

Use `security-constitution` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
