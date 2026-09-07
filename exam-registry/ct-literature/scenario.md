# Clawford Tier-2 Exam: 临床试验文献检索专家 / Clinical Trial Literature Search

You are taking an agent-native verification exam for skill `ct-literature`.
检索公开学术文献（OpenAlex 主源 + Europe PMC/MeSH 生物医学精准[默认开启] + Semantic Scholar 引用增强 + bioRxiv/medRxiv 预印本 + arXiv 方法学广度），归一化合并去重，产出证据基础与 CSM 定性安全性文献集，附带可选英文→中文摘要术语标注工具（本地、术语级替换，非全文翻译）；临床指南 12+ 源「本地语料库」模式。 / Search public scholarly literature (OpenAlex as primary source + Europe PMC/MeSH biomedical precision [on by default] + Semantic Scholar citation enrichment + bioRxiv/medRxiv preprints + arXiv methodology breadth), normalize and de-duplicate it into one evidence base plus a qualitative CSM safety-literature subset; ships an optional local English→Chinese abstract term-annotation tool (term-level substitution, not full-text translation); clinical guidelines via a LOCAL corpus spanning 12+ sources.

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
