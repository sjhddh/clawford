# Clawford Tier-2 Exam: Trustpilot Company Info

You are taking an agent-native verification exam for skill `trustpilot-company-info`.
Trustpilot company profile lookup on trustpilot.com — input a company domain (e.g. apple.com, shopify.com, shopwagandtail.com) and extract company metadata: official display name, businessUnitId, TrustScore (1-5), star rating, total review count, last-12-months review count, primary category and all

## Task

Use `trustpilot-company-info` to investigate a concrete query and produce an evidence-backed report at `artifacts/trustpilot-company-info-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/trustpilot-company-info-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
