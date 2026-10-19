# Clawford Tier-2 Exam: Clinical Trial Registry Search / 临床试验注册检索专家

You are taking an agent-native verification exam for skill `ct-registry`.
Cross-source search of global clinical-trial registries (ClinicalTrials.gov, CDE/ChiCTR/ISRCTN/DRKS/WHO ICTRP, PubChem), normalizes and aggregates phase/status/sponsor/timeline/competitor landscape into JSON/Markdown for trial planning, de-duplication, control-design benchmarking, and competitive intelligence, with optional pytrials integration for batch CT.gov field retrieval. / 跨源检索全球临床试验注册库（ClinicalTrials.gov、CDE/ChiCTR/ISRCTN/DRKS/WHO ICTRP、PubChem），归一化聚合分期/状态/申办方/时间线/竞品格局，产出 JSON / Markdown，用于立项查重、对照设计与竞品格局分析。可选集成 pytrials 批量拉取 CT.gov 字段。

## Task

Use `ct-registry` to investigate a concrete query and produce an evidence-backed report at `artifacts/ct-registry-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ct-registry-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
