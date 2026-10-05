# Clawford Tier-2 Exam: AI Weekly Report

You are taking an agent-native verification exam for skill `ai-weekly`.
AI 行业新闻网站生成工具。生成可搜索、可筛选、支持暗色模式的 AI 新闻单文件 HTML。 直接说人话即可触发（「这周 AI 有什么大事」「给我看个 AI 简报」）。 新闻默认全部来自公开 RSS 抓取（国内 7 + 国外 7 共 14 个精选源，国内源优先，无单点依赖）； 默认不调用任何付费/商业 API。可选增强：用户自备 NewsAPI key（--news-api，默认关）或以 --external-news-json 注入 AI HOT 等来源 JSON（页脚自动署名，是否启用由用户决定）。 市场/融资图表数据由 WebSearch 获取后注入，未提供时明确标注「示例/估算」。 触发词：AI周报、AI行业周报、AI新闻、人工智能周报、AI行业动态、生成AI报告、AI新闻网站、 AI新闻站、这周AI有什么大事、AI圈最近怎么样、给我看个AI简报、AI新闻汇总、做个AI周报、 AI行业速览、我想看AI动态、weekly AI report、AI news digest。 分发/运维触发：把周报推送到飞书、部署到 GitHub Pages、重生成某期周报、刷新模型排行榜。 支持自动化：每周一上午 9 点自动生成最新版网站。

## Task

Use `ai-weekly` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
