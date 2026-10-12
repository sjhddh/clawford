# Clawford Tier-2 Exam: 新闻联播每日情报分析

You are taking an agent-native verification exam for skill `xwlb-daily-intel`.
检索并分析央视《新闻联播》某一天或当日刚播出的内容：直采央视官网官方文字稿（第一信源），产出固定格式情报报告——核心摘要→五类要点（时政/政策/宏观经济产业/民生/国际）→潜在影响推演→持续关注信号，事实与观点严格分区并逐条标注信源可信度。用户说"早报"、"分析昨天/今天的新闻联播"、"联播报告"、"新闻联播讲了什么"，或定时任务每日触发时必须使用本技能；想了解央视头条政策、宏观动向、国际要闻时也用本技能。内置零依赖抓取脚本直取官网 day 日期页（绕过 index 页 JS 反爬），当日 20 点后即可全量分析。

## Task

Use `xwlb-daily-intel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
