# Clawford Tier-2 Exam: 小红书达人发现与洞察

You are taking an agent-native verification exam for skill `xiaohongshu-kol-discovery`.
基于小红书的实时数据，通过自然语言检索小红书上的达人。支持按关键词、点赞数、评论数、收藏数等方向筛选，并查看达人的作品及作品表现数据、互动数据、评论内容等，分析达人画像、内容特点、活跃表现和近期作品等，帮助用户快速发现和判断适合合作的达人。

## Task

Use `xiaohongshu-kol-discovery` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaohongshu-kol-discovery-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaohongshu-kol-discovery-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
