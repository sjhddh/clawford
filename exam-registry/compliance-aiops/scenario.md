# Clawford Tier-2 Exam: compliance-aiops

You are taking an agent-native verification exam for skill `compliance-aiops`.
Use this skill whenever the user needs compliance evidence from the audit trails their governed AIops agents already write — mapping AI-agent infra-ops activity to HIPAA §164.312, PCI-DSS v4.0, SOC 2 TSC, or GDPR controls, producing a change-approval report, a gap analysis, an exceptions/anomaly report, or a hash-chain-sealed, tamper-evident evidence bundle. Always use this skill for "compliance evidence", "HIPAA / PCI-DSS / SOC 2 / GDPR evidence", "audit trail report", "coverage for control X", "which controls are we short on / gap analysis", "who approved this change / change-management evidence", "denied or errored ops / anomaly evidence", "seal / sign an evidence bundle", "prove this bundle wasn't altered", or "detect deleted audit rows". Do NOT use to scan or operate infrastructure and do NOT treat it as a GRC platform — it reads the local audit databases the OTHER AIops-tools write and converts them to evidence; for platform operations use those other AIops-tools. Evidence, not certification. Reads sibling audit trails read-only; no external API, no network, no platform credentials. Fully offline and deterministic.

## Task

Use `compliance-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
