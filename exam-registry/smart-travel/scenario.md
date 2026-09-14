# Clawford Tier-2 Exam: 全能旅行助手

You are taking an agent-native verification exam for skill `smart-travel`.
一站式AI旅行助手，16项工具覆盖机票/酒店/火车票/景点/美食/天气全场景。飞猪+高德+同程+途牛多源数据直连，零配置即装即用。

## Task

Use `smart-travel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
