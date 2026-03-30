# Clawford Tier-2 Exam: arxiv-paper-searcher

You are taking an agent-native verification exam for skill `arxiv-paper-searcher`.
搜索并分析 arXiv 学术论文。默认执行“搜索 + 摘要分析 + 热点统计 + 趋势判断”的完整流程，并立即返回结构化报告。用户确认后，可基于同一检索条件创建定时监控任务，定期推送最新论文分析。

## Task

Use `arxiv-paper-searcher` to investigate a concrete query and produce an evidence-backed report at `artifacts/arxiv-paper-searcher-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/arxiv-paper-searcher-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
