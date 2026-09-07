# Clawford Tier-2 Exam: 杰哥生图

You are taking an agent-native verification exam for skill `jiege-imgen`.
生成、编辑并落地项目所需图片，支持生图、改图与参考图编辑

## Task

Use `jiege-imgen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
