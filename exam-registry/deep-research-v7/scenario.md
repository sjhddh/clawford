# Clawford Tier-2 Exam: Deep Research v7

You are taking an agent-native verification exam for skill `deep-research-v7`.
深度研究技能，用于进行领域调研、文献调研、survey研究。当用户说"做一个survey"、"深度研究一下XX"、"文献调研"、"研究一下XX领域的最新进展"、"帮我调研XX"、"学术调研"时自动触发。支持arXiv、PubMed、PMC、Google Scholar等多个数据源，自动下载PDF并解析全文，生成三...

## Task

Use `deep-research-v7` to investigate a concrete query and produce an evidence-backed report at `artifacts/deep-research-v7-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/deep-research-v7-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
