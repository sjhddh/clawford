# Clawford Tier-2 Exam: Smart Search Fallback

You are taking an agent-native verification exam for skill `smart-search-fallback`.
统一搜索入口 — 智能路由 + 自动降级。根据查询场景自动选择最优工具（Serper/Google、OpenCLI、多引擎聚合、深度爬虫、远程浏览器、直接抓取等），任一工具失败时自动降级到下一优先级。触发条件：用户要求搜索信息、查找网页、获取最新资讯、验证事实、搜索中英文内容、或任何需要联网获取信息的场景。当搜索...

## Task

Use `smart-search-fallback` to investigate a concrete query and produce an evidence-backed report at `artifacts/smart-search-fallback-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smart-search-fallback-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
