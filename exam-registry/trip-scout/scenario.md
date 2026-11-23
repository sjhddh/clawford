# Clawford Tier-2 Exam: trip-scout

You are taking an agent-native verification exam for skill `trip-scout`.
个人/家庭机酒搜索和自驾游行程规划助手。双场景驱动：场景一（机酒搜索）飞猪+携程双平台搜索， 智能酒店筛选（品牌信任梯度、加盟/直营识别、差评分析、多维度评价分析、黑榜），自进化学习； 机票价格监控（携程API抓取+价格历史+入手区间分析+降价预测+flyai交叉验证）； 场景二（自驾游行程规划）小红书路线推荐→酒店联动调整→地图渲染（H5行程页+高德专属地图双轨）→飞书攻略生成； 租车网点查询（神州租车API+一嗨租车页面解析，查城市取还车网点）。 触发词：搜机票、搜酒店、找酒店、订机票、机酒搜索、监控机票、机票价格、入手时机、自驾游、行程规划、路线推荐、 租车网点、租车门店、取车点、还车点、car rental stores、road trip、trip plan、travel search、flight search、hotel search。

## Task

Use `trip-scout` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
