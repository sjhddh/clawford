# Clawford Tier-2 Exam: migu-attraction-query

You are taking an agent-native verification exam for skill `migu-attraction-query`.
咪咕旅游资源查询。查询城市或城市下某区县的景点列表，并进一步查询这些景点周边的酒店与美食。当用户询问“XX市有什么景点”“成都武侯区热门景点”“这些景点附近有什么酒店/好吃的”“景点周边住宿美食”等资源查询需求时使用。仅做景点/酒店/美食的资源检索，不生成行程规划。

## Task

Use `migu-attraction-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/migu-attraction-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/migu-attraction-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
