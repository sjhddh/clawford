# Clawford Tier-2 Exam: skill-studio

You are taking an agent-native verification exam for skill `skill-studio`.
用 5种设计模式诊断并生成 Agent Skill。触发：创建/新建/重构/审计 skill。覆盖诊断→架构→起草→校验→打包。

## Task

Use `skill-studio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
