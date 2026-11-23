# Clawford Tier-2 Exam: TikTok达人发现与洞察

You are taking an agent-native verification exam for skill `tiktok-kol-discovery`.
基于TikTok的实时数据，通过自然语言检索TikTok上的达人。支持按关键词、点赞数等方向筛选，并查看达人的作品及作品表现数据、互动数据、评论内容等，分析达人画像、内容特点、活跃表现和近期作品等，帮助用户快速发现和判断适合合作的达人。提供3个能力①关键词搜索（可按点赞/相关度排序、发布时间筛选）②博主作品获取，按主页链接或用户名批量获取公开作品列表，支持最新/最热排序 ③视频评论抓取，按视频链接或作品 ID 获取评论内容、评论者与互动数据，输出结构化 JSON（含作者、互动数据、标签、链接）。

## Task

Use `tiktok-kol-discovery` to investigate a concrete query and produce an evidence-backed report at `artifacts/tiktok-kol-discovery-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tiktok-kol-discovery-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
