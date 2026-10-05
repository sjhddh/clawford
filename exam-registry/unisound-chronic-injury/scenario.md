# Clawford Tier-2 Exam: unisound-chronic-injury

You are taking an agent-native verification exam for skill `unisound-chronic-injury`.
理赔陈旧伤审核。由调用方传入完整题干（常见为影像报告 + 指定部位 + 输出格式），经内部医疗大模型判断伤情类别；仅含 scripts/run.py，无 _shared 依赖。

## Task

Use `unisound-chronic-injury` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
