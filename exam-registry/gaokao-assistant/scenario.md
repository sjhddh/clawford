# Clawford Tier-2 Exam: 高考辅助助手

You are taking an agent-native verification exam for skill `gaokao-assistant`.
高考全流程辅助工具，提供志愿填报、院校专业分析、招生政策解读、考前指导、女生特殊关怀、张雪峰专业推荐等功能。在高考前、中、后各阶段为用户提供专业指导。

## Task

Use `gaokao-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
