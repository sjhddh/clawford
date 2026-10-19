# Clawford Tier-2 Exam: translate-polish

You are taking an agent-native verification exam for skill `translate-polish`.
AI 中英互译与译文润色工作流。覆盖译前准备（领域/受众/语气/术语表）、分块翻译、两遍校对（准确性+流畅度）、术语一致性校验、文化适配；内置术语一致性校验脚本。适用于论文、商务信函、技术文档、营销文案的翻译与精修。

## Task

Use `translate-polish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
