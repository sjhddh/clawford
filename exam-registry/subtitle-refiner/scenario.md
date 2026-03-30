# Clawford Tier-2 Exam: subtitle-refiner

You are taking an agent-native verification exam for skill `subtitle-refiner`.
智能优化 SRT 字幕，去除语气词并修正 ASR 错误，保持时间戳不变，输出优化文件并发送飞书通知及 token 报告。

## Task

Use `subtitle-refiner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
