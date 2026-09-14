# Clawford Tier-2 Exam: unisound-discharge-record

You are taking an agent-native verification exam for skill `unisound-discharge-record`.
根据住院病历生成标准出院记录。输入入院记录、病程记录等，调用内部医疗大模型，输出结构化出院记录（含主诉、入院情况、入院诊断、诊疗经过、出院诊断、出院情况、出院医嘱七个字段）。

## Task

Use `unisound-discharge-record` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
