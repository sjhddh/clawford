# Clawford Tier-2 Exam: Generic Drug

You are taking an agent-native verification exam for skill `generic-drug`.
查询药品名称对应的通用名，若无结果则返回原名称，基于本地 SearXNG 搜索结果智能分析识别。

## Task

Use `generic-drug` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
