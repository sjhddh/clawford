# Clawford Tier-2 Exam: meeting-score

You are taking an agent-native verification exam for skill `meeting-score`.
会议议题评分系统。会议主持人提供议题名称、材料链接和评委名单，自动在飞书多维表格中创建评分表。每位评委独立打分（打分维度一（替换为实际）、打分维度二（替换为实际）、打分维度三（替换为实际）），打分范围 H/M/L，评分完成后主持人可查看各议题平均分汇总。

## Task

Use `meeting-score` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
