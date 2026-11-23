# Clawford Tier-2 Exam: biometric-confirm

You are taking an agent-native verification exam for skill `biometric-confirm`.
生物识别二次确认服务,敏感操作(暂停/终止/修改)强制指纹/Face ID验证,普通操作免验证。触发:敏感操作/生物识别/二次确认/指纹验证

## Task

Use `biometric-confirm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
