# Clawford Tier-2 Exam: skillguard

You are taking an agent-native verification exam for skill `skillguard`.
使用场景: 用户要审计第三方 Agent Skill、检查 SKILL.md、安装前安全扫描，或评估提示注入、敏感数据、危险命令与供应链风险。

## Task

Use `skillguard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
