# Clawford Tier-2 Exam: Meixin Meeting Assistant

You are taking an agent-native verification exam for skill `jiadong-meixin-meeting`.
镁信健康内部会议纪要生成技能。接收会议录音 → Fun-ASR全量转录 → 结合镁信/健康险行业术语 → 输出结构化会议纪要。

## Task

Use `jiadong-meixin-meeting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
