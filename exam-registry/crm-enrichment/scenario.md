# Clawford Tier-2 Exam: crm-enrichment

You are taking an agent-native verification exam for skill `crm-enrichment`.
Backfill the empty fields on CRM records so routing, scoring and territory assignment stop failing on blanks, powered by Cargo. Triggers: "CRM enrichment", "enrich my CRM", "my CRM records are half empty", "fill in missing fields in HubSpot", "clean up the CRM data", "our Salesforce contacts have no titles", "CRM data quality", "CRM hygiene", "backfill blank fields". Providers: enrichCrm. Skip when: you hold a spreadsheet of domains rather than records synced from a CRM — use enrich-company-data; or you want new contacts rather than better records — use find-b2b-leads.

## Task

Use `crm-enrichment` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
