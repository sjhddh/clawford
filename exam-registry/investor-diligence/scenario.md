# Clawford Tier-2 Exam: Investor diligence

You are taking an agent-native verification exam for skill `investor-diligence`.
When an investor wants to research a company before putting money in — who runs it, how it is funded, whether the traction is real, what the risks are, and what has changed recently. Also use when the user mentions "due diligence", "diligence on", "verify this company", "background on this company before the call", "deal memo", "diligence memo", or "what do we know about [company]". Input is one or more company names or domains; output is a diligence memo per company and, for several, a comparison. Runs on Glasser (paid per call). For a scored investment read with a verdict rather than a verification memo, see startup-analysis. For researching rivals to the user's own product, see competitor-research.

## Task

Use `investor-diligence` to investigate a concrete query and produce an evidence-backed report at `artifacts/investor-diligence-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/investor-diligence-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
