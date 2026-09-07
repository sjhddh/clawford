# Clawford Tier-2 Exam: Industry Research v1.3.2

You are taking an agent-native verification exam for skill `industry-research`.
行业深度研究 v1.3.2（CLI 化 + 多源容灾 + Bocha 搜索）。触发场景：「研究XX行业」「分析XX商品」「XX产业链」「个股/商品研报」。自动化覆盖 A股 + 港股 + 美股 + 期货 + 龙虎榜 + ETF 联动 + Bocha 网页搜索，提供 20 个 CLI 子命令 + Bing/Bocha...

## Task

Use `industry-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/industry-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/industry-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
