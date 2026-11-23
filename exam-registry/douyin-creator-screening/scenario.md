# Clawford Tier-2 Exam: GUAIKEI抖音达人筛选与KOL推荐

You are taking an agent-native verification exam for skill `douyin-creator-screening`.
输入市场、产品、合作目标等，通过关键词、品牌目标或内容方向发现、筛选和复核适合合作的抖音达人，深入分析候选账号的内容特点、真实互动数据等，评估内容能力、受众匹配与商业成本，输出有数据依据的合作候选名单。支持四大能力：(1) 关键词搜索视频/图文，可按点赞数、发布时间、视频时长、内容类型筛选排序；(2) 实时热榜查询，获取抖音热搜词条与热度数据；(3) 博主作品抓取，按主页链接或 sec_uid 获取公开作品列表；(4) 视频评论分析，按视频链接或 aweme_id 获取评论内容与互动数据。

## Task

Use `douyin-creator-screening` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-creator-screening-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-creator-screening-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
