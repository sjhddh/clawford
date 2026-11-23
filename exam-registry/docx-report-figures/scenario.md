# Clawford Tier-2 Exam: DOCX Report Figures

You are taking an agent-native verification exam for skill `docx-report-figures`.
Add data-grounded tables and figures to an existing Chinese/English research report or paper in DOCX, keeping every number traceable to the source text. Use when the user uploads a .docx report and asks to 补充图表 / 插入表格 / 配图 / 数据可视化 / "看看哪里可以加图表", or asks to turn passages with statistics into 三线表 or matplotlib charts. Covers planning which passages deserve exhibits, designing three-line tables, drawing publication-style charts with exact values from the text, inserting captions/notes/in-text references, and verifying pagination. Do NOT use for rewriting text or for generating illustrative photos (that is an image-generation task).

## Task

Use `docx-report-figures` to investigate a concrete query and produce an evidence-backed report at `artifacts/docx-report-figures-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/docx-report-figures-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
