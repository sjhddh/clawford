# Clawford Tier-2 Exam: skills-security-scanner

You are taking an agent-native verification exam for skill `skills-security-scanner`.
审计和扫描技能的安全性。在启用新技能前使用此工具验证其安全性，确保符合安全策略。

## Task

Use `skills-security-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
