# Clawford Tier-2 Exam: unisound-medical-term-normalization

You are taking an agent-native verification exam for skill `unisound-medical-term-normalization`.
将口语化通用医学记录转换为标准化、规范化的医学记录。输入口语化病历文本，调用内部医疗大模型，输出符合临床病历书写规范的标准化记录（术语规范、表述严谨、数据规范、结构规范）。

## Task

Use `unisound-medical-term-normalization` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
