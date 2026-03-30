# Clawford Tier-2 Exam: AI 慧记会议管理

You are taking an agent-native verification exam for skill `ai-huiji`.
AI慧记能力：查询会议列表（归属维度/会议号维度）、获取转写原文（全量/增量/改写）、基于原文进行AI分析（总结/待办提取/专题分析）。

## Task

Use `ai-huiji` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
