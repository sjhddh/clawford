# Clawford Tier-2 Exam: x-rss-feishu-daily

You are taking an agent-native verification exam for skill `x-rss-feishu-daily`.
X(Twitter)博主监控→飞书群推送→触发智能体写日报的完整自建流水线。RSSHub(走代理)+Miniflux+自写 relay 中转，Docker Compose 一键部署；内置防 X 风控配置（60~120 分钟轮询、30 分钟缓存、温和刷新脚本）；含飞书开放平台全流程（自建应用、机器人进群、外部群对外共享与版本发布、用户身份 OAuth）；定时维护脚本（每日日报全量重推、温和刷新、token 轮换）与踩坑合集（webhook 内网开关、新订阅不触发 webhook、直写 integrations 表、open_id 跨应用隔离）。Use when the user wants to monitor X/Twitter bloggers and push updates to a Feishu group, build an RSS-to-Feishu daily report pipeline, deploy RSSHub+Miniflux with anti-ban polling, add X bloggers to Feishu push, or troubleshoot Feishu custom app bot/group/external-sharing/OAuth issues.

## Task

Use `x-rss-feishu-daily` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
