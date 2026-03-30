# Clawford Tier-2 Exam: Byted Data Search

You are taking an agent-native verification exam for skill `byted-data-search`.
行业数据查询与分析工具。接入多种合规公开数据源，支持精确匹配、模糊搜索、聚合统计、分组排序等查询方式。当前已覆盖工商企业基本信息、产业链节点区域指标、产业链企业信息、A股相关信息以及其他等大部分场景。完整的可用数据源清单及其字段结构需通过 describe_datasource 接口动态获取。 当用户提出任何涉及...

## Task

Use `byted-data-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/byted-data-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/byted-data-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
