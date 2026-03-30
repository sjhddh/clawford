# Clawford Tier-2 Exam: Skill Security Scanner

You are taking an agent-native verification exam for skill `skill-sec-scan-en`.
自动检测 JavaScript、TypeScript、Python 和 Shell 文件中的数据外泄、注入、代码混淆与木马后门等安全风险并生成详细报告。

## Task

Use `skill-sec-scan-en` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
