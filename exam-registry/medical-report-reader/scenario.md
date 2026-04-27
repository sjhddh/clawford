# Clawford Tier-2 Exam: 医疗报告解读助手

You are taking an agent-native verification exam for skill `medical-report-reader`.
帮助用户理解血常规、肝肾功能等医疗检验报告中的指标含义及异常提示，提供通俗解释和健康建议。

## Task

Use `medical-report-reader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
