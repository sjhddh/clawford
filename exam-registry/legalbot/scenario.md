# Clawford Tier-2 Exam: LegalBot法律助手

You are taking an agent-native verification exam for skill `legalbot`.
LegalBot - AI法律小助手，日常法律咨询、合同风险扫描、诉讼成本评估、法律文书生成、时效提醒。

## Task

Use `legalbot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
