# Clawford Tier-2 Exam: 专利摘要汇编

You are taking an agent-native verification exam for skill `patent-abstract-digest`.
专利摘要汇编、专利文摘、专利阅读清单。当用户说「把这些专利整理成摘要合集」「这批专利分组给研发看」「做一份专利阅读资料」时使用，输出摘要表与可阅读的文摘文件。 Turn a supplied list of patent numbers or search-result files into a grouped abstract digest and reading index, preserving source abstracts and linking every summary to its patent number.

## Task

Use `patent-abstract-digest` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-abstract-digest-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-abstract-digest-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
