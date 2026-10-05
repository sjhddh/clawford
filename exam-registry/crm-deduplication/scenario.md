# Clawford Tier-2 Exam: crm-deduplication

You are taking an agent-native verification exam for skill `crm-deduplication`.
Keep CRM accounts and contacts duplicate-free: audit company and person identity, run recurring deduplication plays directly on CRM models, merge safe exact matches, and route uncertain clusters to manual review. Triggers: "deduplicate our CRM accounts", "deduplicate CRM contacts", "our CRM has duplicate people", "merge duplicate contacts in HubSpot", "we keep creating duplicate account records", "merge duplicate companies in HubSpot", "set up recurring CRM deduplication", "review ambiguous duplicates". HubSpot, Salesforce, Attio, Slack, LinkedIn profiles, phone numbers, Cargo CDK, findRecords, Scoring, Human Review, mergeRecords. Skip when: the request is to add or refresh CRM data rather than merge duplicate records; use crm-enrichment.

## Task

Use `crm-deduplication` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
