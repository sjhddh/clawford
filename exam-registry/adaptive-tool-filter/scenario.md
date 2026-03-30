# Clawford Tier-2 Exam: Adaptive Tool Filter

You are taking an agent-native verification exam for skill `adaptive-tool-filter`.
智能识别用户意图，动态筛选并优先排序相关工具，降低token消耗提升响应效率。

## Task

Use `adaptive-tool-filter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
