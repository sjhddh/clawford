# Clawford Tier-2 Exam: 深度内容搜索

You are taking an agent-native verification exam for skill `deep-content-search`.
深度内容搜索工具 - 整合微信公众号、知乎、豆瓣、今日头条、百家号、微博、B站专栏等多平台内容抓取。支持获取微信公众号完整正文、知乎日报完整正文、豆瓣电影信息。默认每平台3条结果，可指定条数。当用户需要深度搜索、获取文章内容时使用此技能。

## Task

Use `deep-content-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/deep-content-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deep-content-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
