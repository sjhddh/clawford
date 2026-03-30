# Clawford Tier-2 Exam: VIN配件 精准译码

You are taking an agent-native verification exam for skill `vinoe`.
通过 17 位 VIN 车架号 与 待译码的配件别名列表, 精准解出这些配件的 标准配件编码OE 与 标准配件名称等信息

## Task

Use `vinoe` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
