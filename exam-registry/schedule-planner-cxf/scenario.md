# Clawford Tier-2 Exam: schedule-planner-cxf

You are taking an agent-native verification exam for skill `schedule-planner-cxf`.
全能出行管家技能 — 处理出行规划/行程安排/出差旅游等场景，整合高德地图（路线/天气/周边）与途牛旅行（机票/酒店/火车票/门票**价格查询与比价**）服务，提供场景识别、智能比价、行程规划与行程网页生成。能力与副作用完整披露：(1) 从环境变量读取 AMAP_API_KEY、TUNIU_API_KEY 用于本次查询调用，不跨会话上传第三方；本技能包不含任何密钥文件；(2) **仅调用查询/搜索类接口**（searchLowestPriceFlight / tuniu_hotel_search / searchLowestPriceTrain / query_cheapest_tickets

## Task

Use `schedule-planner-cxf` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
