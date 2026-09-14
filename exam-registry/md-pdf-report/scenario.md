# Clawford Tier-2 Exam: Markdown → PDF Report

You are taking an agent-native verification exam for skill `md-pdf-report`.
Convert Markdown research reports / fact-checks / scheme proposals into styled PDFs with native CJK (Chinese) font support. Markdown is the single source of truth; PDF is generated FROM the Markdown. Triggers on "做个 PDF 报告", "转成 PDF", "调研报告", "fact-check 报告", "方案 PDF", "scheme 报告", "给我 PDF", "PDF 版本", or any long-form analytical content that needs to be both editable (MD) and viewable/shareable (PDF).

## Task

Use `md-pdf-report` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
