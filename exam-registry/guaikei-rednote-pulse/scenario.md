# Clawford Tier-2 Exam: 红笔记内容脉搏

You are taking an agent-native verification exam for skill `guaikei-rednote-pulse`.
检索小红书公开内容：按关键词搜笔记、查单篇笔记详情、单独拉取评论区、抓取博主主页作品列表，输出结构化 JSON，支撑爆款选题、竞品监控、KOL 筛选与评论舆情分析。只要用户想从小红书拿内容数据——提到小红书/红笔记/xhs/rednote，或给出 xiaohongshu.com / xhslink.com 链接并索要笔记、评论、博主作品信息——即可使用，即使未出现平台名也能通过链接与数据诉求识别。仅限公开数据，不做登录、发布、互动与私密内容获取。

## Task

Use `guaikei-rednote-pulse` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-rednote-pulse-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-rednote-pulse-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
