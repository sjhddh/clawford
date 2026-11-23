# Clawford Tier-2 Exam: NoteGPT Page Seo Checker Skill

You are taking an agent-native verification exam for skill `page-seo-checker`.
Check SEO compliance of any domain page based on internal SEO standards and page launch checklist, generating a visual HTML report. Automatically extracts domain from URL, supports production and test environments. Trigger keywords: check SEO, SEO check, check page SEO, page SEO compliance, SEO report. Activate when user provides a page URL and requests SEO compliance check.

## Task

Use `page-seo-checker` to investigate a concrete query and produce an evidence-backed report at `artifacts/page-seo-checker-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/page-seo-checker-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
