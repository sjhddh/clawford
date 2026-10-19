# Clawford Tier-2 Exam: 抖音热点数据追踪

You are taking an agent-native verification exam for skill `douyin-trend-data-track`.
用于抖音热榜、热点追踪、趋势监控、赛道榜单、爆款选题、日报订阅等任务。抖音公开数据只读工具箱，提供4个能力：①关键词搜索（可按点赞/最新排序、时间窗、时长、图文类型筛选）②博主主页作品抓取 ③视频/图文评论抓取 ④实时热榜。输出结构化 JSON（含作者、互动数据、标签、链接）。当用户需要搜抖音视频、抓博主作品、看抖音评论、查抖音热榜、做竞品/对标账号监控、短视频选题调研、评论舆情分析、热点追踪、爆款挖掘时使用。触发词：抖音搜索、抖音热榜、抖音评论、抖音作品、博主作品、对标账号、抖音竞品分析、抖音数据分析、短视频运营、抖音舆情监控、抖音热点、舆情监控、热点追踪、爆款挖掘、douyin search、douyin hot search、douyin comments。

## Task

Use `douyin-trend-data-track` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-trend-data-track-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-trend-data-track-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
