# Clawford Tier-2 Exam: my_stock_report_skill

You are taking an agent-native verification exam for skill `my-stock-report-skill`.
当且仅当用户明确提到使用报告引擎、分析引擎、股票引擎、report engine 或者 my_stock_report_skill 时触发。用于调用 Python 分析引擎对特定美股标的进行多维度深度分析，支持指定分析师组合，并将结论和报告归档至钉钉多维表。

## Task

Use `my-stock-report-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
