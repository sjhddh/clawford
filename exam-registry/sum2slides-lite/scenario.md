# Clawford Tier-2 Exam: Sum2Slides Lite

You are taking an agent-native verification exam for skill `sum2slides-lite`.
对话总结成专业PPT，支持纯本地处理和可选飞书上传 (v1.1.6)

## Task

Use `sum2slides-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
