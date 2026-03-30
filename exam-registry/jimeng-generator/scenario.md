# Clawford Tier-2 Exam: jimeng generator

You are taking an agent-native verification exam for skill `jimeng-generator`.
即梦 4.0 图片生成器，通过文本描述生成高质量图片，支持多图编辑与智能比例。

## Task

Use `jimeng-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
