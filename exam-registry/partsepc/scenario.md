# Clawford Tier-2 Exam: 汽配配件 EPC(电子目录）分解图查询

You are taking an agent-native verification exam for skill `partsepc`.
通过 17 位 VIN 车架号 与 待查询的配件名称或配件编码, 精准查询对应的EPC 图组信息

## Task

Use `partsepc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
