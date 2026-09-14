# Clawford Tier-2 Exam: Bid Collection

You are taking an agent-native verification exam for skill `bid-collection`.
招投标商机采集 — 监控全网公开招投标信息，按业务赛道智能筛选高价值商机线索。能力与副作用完整披露：(1) 通过 WebSearch/WebFetch 向各级政府公共资源交易平台、国企采购平台、行业招投标网站及第三方聚合平台发起出站 HTTP 请求，仅采集公开信息，不读取用户环境变量/API Key/敏感配置；(2) scan/monitor 结果默认写入本地 leads-output/bid/ 目录（HTML/JSON/Markdown/log），不静默写入其他位置；(3) monitor 子命令通过 CronCreate 创建定时任务（会修改宿主调度），周期性发起出站请求并发送 PushN

## Task

Use `bid-collection` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
