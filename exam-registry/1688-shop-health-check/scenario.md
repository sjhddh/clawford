# Clawford Tier-2 Exam: 1688-shop-health-check

You are taking an agent-native verification exam for skill `1688-shop-health-check`.
1688 店铺生意体检。基于流量、询盘、成交、商品、客户、广告、风险七大维度进行全面健康诊断（成交维度覆盖成交、订单履约与买家评价，风险维度专注合规扣分），输出总结性结论 + HTML 网页数据报告，支持多店铺批量体检；报告后可基于优先行动建议展示可多选交互卡片，继续执行对应优化动作，并可按条件引导用户设置每日定时体检任务。 本 Skill 的完整流程（意图确认 → 七维度诊断 → 结论输出 → HTML 报告 → 行动项选择）已由 workflow `1688-shop-health-check` 编排覆盖，命中 whenToUse（店铺体检、健康检查、店铺诊断、店铺分析、经营分析、全面诊断、店铺经营状况、体检报告）时直接执行 workflow，不加载本 SKILL.md。

## Task

Use `1688-shop-health-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
