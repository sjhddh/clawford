# Clawford Tier-2 Exam: 论衡 — 严肃长文流水线

You are taking an agent-native verification exam for skill `lunheng-article-pipeline`.
严肃长文流水线（学术论文/商业评论/行业分析/公众号深度长文）——多 Agent 子代理编排。三角验证（文献/数据/案例）+ M 门（LLM 结构化判定）+ F 失败模式防御 + 数据信任 3 档 + 修订回环 ≤2 轮。使用前需 Phase 0 同意关卡。<2000 字建议直接用主控 LLM。

## Task

Use `lunheng-article-pipeline` to investigate a concrete query and produce an evidence-backed report at `artifacts/lunheng-article-pipeline-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lunheng-article-pipeline-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
