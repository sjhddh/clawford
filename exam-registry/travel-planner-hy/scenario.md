# Clawford Tier-2 Exam: Travel Planner HY

You are taking an agent-native verification exam for skill `travel-planner-hy`.
智能旅行规划技能 — 多城市/多日游行程编排、景点检索、预算匹配、完整方案输出（每日详情/预算明细/住宿推荐/交通方案/物品清单/安全应急）。能力与副作用完整披露：(1) 通过 WebSearch/WebFetch 向公开景点官网、攻略站、地图服务发起出站 HTTP 请求获取公开信息；(2) 可选读取本地环境变量 AMAP_API_KEY（高德路线/天气，可选，未配置则跳过该部分）；不读取 TUNIU/Fliggy/其他第三方 API Key，不调用其预订/下单接口；(3) 本地生成行程 HTML 与二维码（qrcode 库），写入技能同级 output/ 目录；(4) 生成的二维码与"预订/

## Task

Use `travel-planner-hy` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
