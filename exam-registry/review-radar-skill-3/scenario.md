# Clawford Tier-2 Exam: review-radar

You are taking an agent-native verification exam for skill `review-radar-skill-3`.
显示器评测视频情报提取。给 OpenClaw 一个 B 站/YouTube 评测视频链接，自动转写口播音频并产出结构化评测情报卡（实测数据、优缺点、博主结论、竞品提及），也可批量处理多个链接并汇总。当用户提到"总结评测视频""显示器评测报告""批量看评测""评测情报"时使用。

## Task

Use `review-radar-skill-3` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
