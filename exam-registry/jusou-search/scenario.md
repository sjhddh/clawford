# Clawford Tier-2 Exam: Jusou Search

You are taking an agent-native verification exam for skill `jusou-search`.
用聚搜GO（Jusou）给 Agent 联网搜索：一个 Key 调 8 个搜索引擎（Exa / Tavily / Serper / SerpApi / Brave / 博查 / 百度 / AnySearch），按积分计费、失败不扣分。用户要求联网搜索、查最新信息、找资料、核实事实、多引擎对比，或提到 Tavily...

## Task

Use `jusou-search` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
