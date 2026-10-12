# Clawford Tier-2 Exam: B站关键词搜作品

You are taking an agent-native verification exam for skill `bilibili-keywords-search`.
B站关键词搜作品工具。根据用户输入的关键词调用 Redfox 接口搜索B站最新视频，支持按排序方式和发布时间筛选，返回新鲜数据（非缓存/历史数据）。当用户要求搜索B站最新内容、查看某关键词下的视频数据时使用。触发词：B站搜索、B站最新视频、B站热门、B站搜作品、bilibili搜索。

## Task

Use `bilibili-keywords-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/bilibili-keywords-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bilibili-keywords-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
