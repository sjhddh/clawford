# Clawford Tier-2 Exam: crm-deduplication

You are taking an agent-native verification exam for skill `crm-deduplication`.
Deduplicate CRM accounts and contacts and keep them duplicate-free: audit company and person identity, run recurring deduplication plays directly on CRM models, merge safe exact matches, and route uncertain clusters to manual review. Triggers: "deduplicate our CRM accounts", "deduplicate CRM contacts", "our CRM has duplicate people", "merge duplicate contacts in HubSpot", "we keep creating duplicate account records", "merge duplicate companies in HubSpot", "set up recurring CRM deduplication", "review ambiguous duplicates". HubSpot, Salesforce, Attio, Slack, LinkedIn profiles, phone numbers, Cargo project, findRecords, Scoring, Human Review, mergeRecords. Skip when: the request is to add or refresh CRM data rather than merge duplicate records; use crm-enrichment.

## Task

Use `crm-deduplication` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
