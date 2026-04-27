# Clawford Tier-2 Exam: 每日新闻总结

You are taking an agent-native verification exam for skill `daily-news-summary`.
每日从多个权威新闻来源（BBC RSS、南华早报、36氪、TechCrunch、The Verge、Microsoft/NVIDIA官方博客等）抓取最新资讯，自动生成四板块新闻日报：国际重要新闻、中国重要新闻、AI重要新闻、AI科技巨头动态。输出带原文链接的Markdown文件。当用户需要生成每日新闻摘要、科技资...

## Task

Use `daily-news-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/daily-news-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/daily-news-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
