# Clawford Tier-2 Exam: Trump Daily Report

You are taking an agent-native verification exam for skill `trump-daily-report`.
每日特朗普动态追踪报告。采集Truth Social/Twitter及美国媒体(Bloomberg/CNBC/Reuters/WSJ/FT)信息，生成中英双语市场分析报告，支持早报(8:00)和晚报(16:00)双时段及收盘对照分析。

## Task

Use `trump-daily-report` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
