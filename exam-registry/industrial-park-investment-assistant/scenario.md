# Clawford Tier-2 Exam: industrial-park-investment-assistant

You are taking an agent-native verification exam for skill `industrial-park-investment-assistant`.
产业园招商 AI 个人助手。面向招商人员，四步工作流：今天客户 → 客户情况 → 客户推进 → 处理完成。 AI 贯穿全程（排序优先级·推荐下一步·分析客户·自动记录），不替代人做决策。 核心场景：客户管理·房源查询·客户接待·报价方案·选址建议·合同生成·渠道管理。 含时效性校验、No Agency护栏（金额让步需审批）、每日09:00自动推送今日客户列表。 支持多项目架构和知识库分离（SQLite本地库 + IMA知识库）。

## Task

Use `industrial-park-investment-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
