# Clawford Tier-2 Exam: 快手数据分析与市场调研

You are taking an agent-native verification exam for skill `kuaishou-research`.
通过怪奇信息查询和分析快手视频、达人、评论和品类机会研究。用户提到快手、KuaiShou或Kwai 数据分析、市场调研、选品、找品、爆品、趋势、市场容量、竞争结构等数据形成经营判断时使用，依据快手真实返回的数据形成分析结论。支持三大能力：(1) 关键词搜索视频，可按点赞数、发布时间、视频时长筛选排序；(2) 博主作品抓取，按主页链接获取公开作品列表；(3) 视频评论分析，按视频链接获取评论内容与互动数据。

## Task

Use `kuaishou-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/kuaishou-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kuaishou-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
