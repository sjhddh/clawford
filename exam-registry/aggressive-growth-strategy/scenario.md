# Clawford Tier-2 Exam: aggressive_growth_strategy

You are taking an agent-native verification exam for skill `aggressive-growth-strategy`.
激进成长选股与交易分析执行框架——将"周期性成长"方法论转化为可操作的选股筛选、个股深度分析和市场季节判断工具。 当用户需要：按七标准筛选小盘成长股、对个股进行八步体系化分析（赛道→市值→成长→位置→指数→排除→建仓→卖出）、 判断当前市场季节（春夏秋冬）与仓位策略、制定"小偷式"建仓与倒金字塔卖出计划时，加载此技能。 与 aggressive-growth-investing 技能的关系：后者是"心法"（理论体系），本技能是"剑法"（执行工具）。 核心数据源：四层降级架构（Tushare MCP > akshare > baostock > 东方财富API），通过共享模块 data_source.py 统一管理。

## Task

Use `aggressive-growth-strategy` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
