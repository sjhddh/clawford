# Clawford Tier-2 Exam: 臻选顾问

You are taking an agent-native verification exam for skill `gongjian-catalog`.
臻选顾问 - 共健臻选AI产品顾问，通过对话查询保健品信息、推荐产品、解答功效疑问

## Task

Use `gongjian-catalog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
