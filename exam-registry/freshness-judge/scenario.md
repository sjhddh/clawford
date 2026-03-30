# Clawford Tier-2 Exam: Freshness Judge

You are taking an agent-native verification exam for skill `freshness-judge`.
LLM通用证据新鲜度判断技能。根据时间窗和证据时间信息，判断每条证据属于current/background/stale/undated/malformed哪一类。在搜索结果标准化之后、需要区分当前证据与背景证据时使用。触发条件：现实问题/新闻/政策/市场分析、需要降低"把旧材料当新材料"风险、时间敏感型任务。

## Task

Use `freshness-judge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
