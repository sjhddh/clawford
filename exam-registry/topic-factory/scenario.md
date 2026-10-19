# Clawford Tier-2 Exam: 自媒体选题日报系统

You are taking an agent-native verification exam for skill `topic-factory`.
跨平台自媒体选题日报系统 — 每天自动从 6 大数据源（头条/微博/B站/抖音/知乎/36氪） 抓取热点新闻，按 6 大类 119 词关键词库筛选，LLM 生成抖音钩子和公众号标题， 输出 Markdown 选题日报，推送到飞书 webhook。 适用场景： - 自媒体运营：每天 10 个候选选题，⭐ 优先 3 个 - 双平台发布：抖音 60s 口播 + 公众号 2000-3000 字图文 - "只看数据说话"人设：严格禁词清单 + 数据点必填 - 跨平台热点捕获：6 大数据源 + 36h 时间窗口过滤 本 skill 含完整工作流：4 个脚本 + 4 个 cron 配置 + 飞书 webhook 推送 + 限流 fallback。

## Task

Use `topic-factory` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
