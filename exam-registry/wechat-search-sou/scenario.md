# Clawford Tier-2 Exam: 微信搜索

You are taking an agent-native verification exam for skill `wechat-search-sou`.
微信搜一搜公开数据只读：按关键词搜微信文章、微信视频。触发：微信搜索、搜一搜、公众号文章、视频号、微信热门、微信最新、wechat search、wechat article、wechat video。抖音、小红书、快手、B站、微博不要用本技能。不支持图片搜索、正文抓取、账号登录。

## Task

Use `wechat-search-sou` to investigate a concrete query and produce an evidence-backed report at `artifacts/wechat-search-sou-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wechat-search-sou-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
