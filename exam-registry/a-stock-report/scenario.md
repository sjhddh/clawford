# Clawford Tier-2 Exam: A-stock-report

You are taking an agent-native verification exam for skill `a-stock-report`.
A股数据驱动型报告自动生成与推送系统，支持晨报 / 收盘小结 / 晚报 / 盘中预警 / IPO周报 / 财经周末版。内置投资者情绪打分（6维度，满分100）与AI后市展望。

## Task

Use `a-stock-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
