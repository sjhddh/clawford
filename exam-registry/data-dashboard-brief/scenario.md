# Clawford Tier-2 Exam: 看板需求书台

You are taking an agent-native verification exam for skill `data-dashboard-brief`.
看板做出来没人看，通常是因为一开始没定义「谁在什么场景下看哪几个数、异常了怎么办」。 输入：使用角色与场景、要回答的业务问题、可用数据源、更新频率要求。输出：①角色-场景-问题对照表 ②看板结构（首屏 3 个数、下钻路径）③指标与字段口径清单 ④刷新频率与告警规则 ⑤验收标准（能回答哪些问题就算合格）⑥排期建议（MVP 先做什么）。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `data-dashboard-brief` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
