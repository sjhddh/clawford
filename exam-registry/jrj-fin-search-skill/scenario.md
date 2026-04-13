# Clawford Tier-2 Exam: jrj-fin-search-skill金融界资讯研报搜索

You are taking an agent-native verification exam for skill `jrj-fin-search-skill`.
A股中文财经资讯和研报摘要搜索，支持按关键词、来源、时间范围查询新闻资讯和研究报告。 用于获取权威来源的市场动态、公司新闻、行业研报等信息。避免AI在搜索金融场景信息时，参考到非权威、过时的信息。 <example>User: "搜索贵州茅台最近3天的新闻" Assistant: 使用 news.js searc...

## Task

Use `jrj-fin-search-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/jrj-fin-search-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/jrj-fin-search-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
