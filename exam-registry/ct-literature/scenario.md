# Clawford Tier-2 Exam: Clinical Trial Literature Search / 临床试验文献检索专家

You are taking an agent-native verification exam for skill `ct-literature`.
检索公开学术文献（OpenAlex 主源 + Europe PMC/MeSH 生物医学精准[默认开启] + bioRxiv/medRxiv 预印本 + arXiv 方法学广度），归一化合并去重，可产出 CSM 安全性定性子集，协助提供OA文献PDF下载。

## Task

Use `ct-literature` to investigate a concrete query and produce an evidence-backed report at `artifacts/ct-literature-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ct-literature-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
