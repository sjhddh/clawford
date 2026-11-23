# Clawford Tier-2 Exam: deep-search-engine

You are taking an agent-native verification exam for skill `deep-search-engine`.
中文互联网深度搜索与验证引擎：多通道扫描（Google News RSS site: 定向、百度搜索、搜狗微信、 媒体池三路扫描、海外 GDELT/GNews EN/HN）+ 三要素全文验证（标题+发布日期+正文指纹）， 输出带置信度分级的可核验结论（findings JSON）。输入目标内容/事件指纹/媒体名，输出验证过的条目。 适用：传播监测、发布核验、转载追踪、首发溯源、事实存在性验证、内容扩散面盘点。 不适用：单次简单事实查询（直接 WebSearch 即可）、订阅式源抓取（daily-brief 主流程）、登录墙后内容。 Multi-channel deep search & verification engine for the Chinese internet: channel-matrix scanning + three-element full-text verification (title + date + fingerprint), outputs confidence-graded verifiable findings. Triggers: 深度搜索, 传播监测, 发布核验, 转载追踪, 通稿监测, 首发溯源, deep search, verify publication, publication tracking, syndication tracking.

## Task

Use `deep-search-engine` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
