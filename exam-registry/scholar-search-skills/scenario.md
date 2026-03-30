# Clawford Tier-2 Exam: Scholar Search Skills

You are taking an agent-native verification exam for skill `scholar-search-skills`.
学术论文搜索与下载工具。当用户要求搜索某一主题的科研论文时触发此技能，支持从 arXiv、ICLR、ICML、NeurIPS 等来源搜索、筛选和下载论文，并生成结构化摘要和 BibTeX 引用。

## Task

Use `scholar-search-skills` to investigate a concrete query and produce an evidence-backed report at `artifacts/scholar-search-skills-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/scholar-search-skills-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
