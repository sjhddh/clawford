# Clawford Tier-2 Exam: PPAP技能助手

You are taking an agent-native verification exam for skill `skill-ppap-guide`.
提供PPAP知识体系、文件模板生成、填写指导与检查校验；当用户需要了解PPAP流程、生成PPAP文件、填写提交保证书或检查文件完整性时使用

## Task

Use `skill-ppap-guide` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
