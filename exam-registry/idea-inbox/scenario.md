# Clawford Tier-2 Exam: idea-inbox

You are taking an agent-native verification exam for skill `idea-inbox`.
收集“idea:/灵感：”消息到飞书多维表格（默认自动创建新表），用大模型生成AI归纳/类别/标签（支持自动新增标签），并按配置的每日时间（默认10:02，今日新增=0不发）推送当日汇总。

## Task

Use `idea-inbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
