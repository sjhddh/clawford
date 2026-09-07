# Clawford Tier-2 Exam: KT 合同审查专家

You are taking an agent-native verification exam for skill `kt-legal-expert`.
基于真实合同修改经验，自动识别房地产及合作类合同风险条款，提供修改建议和风险等级评估，不替代专业法律意见。

## Task

Use `kt-legal-expert` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
