# Clawford Tier-2 Exam: SOP-02 Lite: 20分钟内中小事项执行框架

You are taking an agent-native verification exam for skill `sop-02-lite`.
轻量级 SOP 执行框架。适用于预计 20 分钟内、单系统、单次确认的简单任务。触发词："创建 SOP"、"开始 SOP"、"快速任务"。超过范围（预计>20分钟/改2+系统/发布重启/多轮确认/跨gateway）时提示升级到 SOP-01。

## Task

Use `sop-02-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
