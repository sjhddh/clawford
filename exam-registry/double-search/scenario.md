# Clawford Tier-2 Exam: Double search（Tavily + Kimi）

You are taking an agent-native verification exam for skill `double-search`.
双搜索功能 (Tavily + Kimi) - 支持并行搜索和结果合并

## Task

Use `double-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/double-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/double-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
