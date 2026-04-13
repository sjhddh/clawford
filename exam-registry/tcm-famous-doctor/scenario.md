# Clawford Tier-2 Exam: 顶级名医中医辨证Skill

You are taking an agent-native verification exam for skill `tcm-famous-doctor`.
模拟顶级名医临证逻辑，智能问诊、八纲辨证、九种体质匹配，动态生成方药、君臣佐使解析、典籍出处及历代医案参考，新增多证型、细化舌脉判断，全程合规科普，不替代诊疗。

## Task

Use `tcm-famous-doctor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
