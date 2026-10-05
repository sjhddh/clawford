# Clawford Tier-2 Exam: unisound-primary-diagnosis-surgery-selection

You are taking an agent-native verification exam for skill `unisound-primary-diagnosis-surgery-selection`.
主诊断和主手术选择。输入病历摘要、候选诊断和候选手术，调用内部医疗大模型，从候选项中选择本次入院的主诊断和主手术。

## Task

Use `unisound-primary-diagnosis-surgery-selection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
