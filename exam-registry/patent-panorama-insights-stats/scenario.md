# Clawford Tier-2 Exam: patent-panorama-insights-stats

You are taking an agent-native verification exam for skill `patent-panorama-insights-stats`.
用于专利全景项目的环节2。它消费 patent-panorama-insights-search（环节1）产出的已验证 `search_config.json`、`candidate_pool.csv` 和 `core_recall.csv`，生成全景统计（趋势、申请人格局、技术构成、竞品画像）、按分支组织的核心专利索引（默认采信环节1召回排序，仅在必要时做有边界的兜底核查）和价值信号交叉挖掘文件。所有统计直接从检索式聚合，不需要逐件专利标引。

## Task

Use `patent-panorama-insights-stats` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-panorama-insights-stats-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-panorama-insights-stats-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
