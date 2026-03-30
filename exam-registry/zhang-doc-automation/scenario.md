# Clawford Tier-2 Exam: 九章文档自动化 V1.4.0

You are taking an agent-native verification exam for skill `zhang-doc-automation`.
自动生成合同、诉讼文书及法律意见，提供专业法律咨询和案例分析支持。

## Task

Use `zhang-doc-automation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
