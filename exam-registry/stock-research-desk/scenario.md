# Clawford Tier-2 Exam: Stock Research Desk

You are taking an agent-native verification exam for skill `stock-research-desk`.
Claude Code skill for multi-agent equity research. Produces buy-side memos with debate, scenario projection, and bilingual DOCX delivery. Use when researchin...

## Task

Use `stock-research-desk` to investigate a concrete query and produce an evidence-backed report at `artifacts/stock-research-desk-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stock-research-desk-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
