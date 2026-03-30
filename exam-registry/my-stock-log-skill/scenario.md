# Clawford Tier-2 Exam: my_stock_log_skill

You are taking an agent-native verification exam for skill `my-stock-log-skill`.
当且仅当用户明确提到“分析日志多维表”或“my_stock_log_skill”时触发。专门用于美股分析报告结论在钉钉多维表（dingtalk-ai-table）中的结构化归档（新增）与检索（查询）。

## Task

Use `my-stock-log-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
