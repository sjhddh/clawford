# Clawford Tier-2 Exam: 抖音达人发现与洞察

You are taking an agent-native verification exam for skill `douyin-kol-discovery`.
基于抖音的实时数据，通过自然语言检索抖音上的达人。支持按关键词、点赞数等方向筛选，并查看达人的作品及作品表现数据、互动数据、评论内容等，分析达人画像、内容特点、活跃表现和近期作品等，帮助用户快速发现和判断适合合作的达人。支持五大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 单条作品详情，按视频链接或 aweme_id 获取文案、互动与作者；(4) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(5) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-kol-discovery` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-kol-discovery-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-kol-discovery-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
