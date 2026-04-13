# Clawford Tier-2 Exam: 自动为文章添加参考文献

You are taking an agent-native verification exam for skill `auto-citation`.
自动为学术文章添加参考文献。解析文章内容提取主题和关键词， 调用 academic-search 检索相关论文，推荐候选文献供用户确认， 自动插入格式化的引用。支持 Markdown/LaTeX/Word 输入， 输出 BibTeX/GB/T 7714/APA 格式。当用户说"帮我加参考文献"、 "给这篇文章找引...

## Task

Use `auto-citation` to investigate a concrete query and produce an evidence-backed report at `artifacts/auto-citation-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/auto-citation-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
