# Clawford Tier-2 Exam: unisound-pre-existing-review

You are taking an agent-native verification exam for skill `unisound-pre-existing-review`.
理赔既往症审核。由调用方传入完整题干（病历/材料 + 关系类型与报销结论格式），经内部医疗大模型判断其他诊断与主诊断关系及是否报销；仅含 scripts/run.py，无 _shared 依赖。

## Task

Use `unisound-pre-existing-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
