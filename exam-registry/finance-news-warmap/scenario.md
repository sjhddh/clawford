# Clawford Tier-2 Exam: finance-news-warmap

You are taking an agent-native verification exam for skill `finance-news-warmap`.
金融/行业「新闻作战地图」构建 skill。把真实搜索新闻按经纬度落点，生成 Palantir 风格、可离线双击打开的单文件 HTML（ECharts 地理散点 + 中国/世界切换 + 可筛选可悬停 + 右侧数据驱动「建议区」）。配套 search→compile→fill 流水线，把每个细分领域自动补满 N 条真实新闻并去重，绝不编造数据。触发：做新闻情报地图、作战地图、创新动态地图、搜新闻自动补满、给高管出趋势与建议面板、要离线自包含 HTML 交付物。**调用前须由 agent 执行 WebSearch 联网能力探测（不可用则中止，不编造/不占位；此为 agent 侧流程约束，非代码强制断言）。所有库/字体/地图数据均随技能本地分发并在构建时内联，运行时无任何 CDN/外部请求。**

## Task

Use `finance-news-warmap` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
