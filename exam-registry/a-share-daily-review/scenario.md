# Clawford Tier-2 Exam: a-share-daily-review

You are taking an agent-native verification exam for skill `a-share-daily-review`.
全球市场每日复盘生成器(免API Key)。当用户说"A股复盘""今日复盘""大盘复盘""收盘总结""全球市场""今天股市怎么样""生成复盘报告"等,需要生成当日全球市场复盘时使用本技能。基于 akshare 公开数据本地直连,无需注册任何账号、无需配置 API Key,装完即用。输出:A股指数+情绪+行业板块+概念板块+涨停梯队+龙虎榜 + 港股/美股/日韩/欧洲指数 + 北向资金的结构化 Markdown 日报,附确定性摘要和异动提醒。仅陈述市场事实,不构成投资建议。v1.2 新增洞察层和纯文本输出。

## Task

Use `a-share-daily-review` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
