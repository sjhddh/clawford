# Clawford Tier-2 Exam: rabbit-reads

You are taking an agent-native verification exam for skill `rabbit-reads`.
Distill a book, paper, or thesis into a folder of terse per-concept cheatsheets with a README index. Use whenever the user asks to "read this PDF and turn it into a doc set", "extract the practices from this book", wants "chapter summaries", "cheatsheets" or "best-practice cards", asks for "craft notes from a novel" or "the claims and methods out of an arxiv paper", or says "make study notes from this thesis". Covers normalizing any source format to text (txt, md, docx, pdf, doc, rtf, html, odt, epub), mapping the source's structure to section line ranges, planning the doc set, fanning the writing out to subagents, and verifying the result, cut by concept and never one file per chapter.

## Task

Use `rabbit-reads` to investigate a concrete query and produce an evidence-backed report at `artifacts/rabbit-reads-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/rabbit-reads-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
