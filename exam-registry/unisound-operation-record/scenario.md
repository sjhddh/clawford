# Clawford Tier-2 Exam: unisound-operation-record

You are taking an agent-native verification exam for skill `unisound-operation-record`.
根据手术相关病历素材生成规范的手术记录。输入术前小结、术中记录、术后记录等，调用内部医疗大模型，输出结构化手术记录（含手术日期、时间、地点、医生、手术名称、指征、诊断、经过、异常情况、术后情况、签名等 14 个字段）。

## Task

Use `unisound-operation-record` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
