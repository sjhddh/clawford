# Clawford Tier-2 Exam: lifelog2

You are taking an agent-native verification exam for skill `lifelog2`.
碎片化日记记录和汇总技能。当用户想要记录当天碎片化的想法、心情、事件，或者需要汇总、存档日记时使用。触发场景包括：用户发送"记日记"记录碎片内容、发送"汇总日记"整理当天内容、发送"日记存档"将日记写入 flomo 和 ima。

## Task

Use `lifelog2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
