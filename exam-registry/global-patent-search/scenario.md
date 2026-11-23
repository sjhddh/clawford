# Clawford Tier-2 Exam: Global Patent Search · PatentMax

You are taking an agent-native verification exam for skill `global-patent-search`.
全球专利检索与统计分析。当用户提到专利检索、找专利、现有技术、相似专利、引证分析、某家公司有多少专利、某个领域谁在申请、技术趋势分布，或直接给出一个专利号、公开号时使用。也用于：查外国专利（美国、欧洲、日本、韩国）、按专利号或申请号查一篇、看权利要求和说明书全文、查法律状态（还有没有效）、下载专利 PDF 和附图、查某家企业 / 高校 / 发明人 / 代理机构有哪些专利。Use when the user asks to search patents, look up a patent, find similar patents, analyse citations, or profile a company patent portfolio. Also covers foreign (US/EP/JP/KR) patents, lookup by publication or application number, full claims and description, legal status, patent PDF and drawings, and patents of a company, university, inventor or agency.

## Task

Use `global-patent-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/global-patent-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/global-patent-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
