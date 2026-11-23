# Clawford Tier-2 Exam: Hubspot Cli

You are taking an agent-native verification exam for skill `wirecat-hubspot`.
Use hubspot to read and change a HubSpot account's CRM - deals, leads, pipelines and stages, contacts (people), companies (organizations), owners (users), notes, calls, e-mails, meetings and tasks - with the owner's profile and JSON answers. Deals with their contacts and companies are synced into the local WireCat store and read offline, and `changes list` shows what changed for a morning digest. Use when a question could be answered from the owner's HubSpot sales data (how a deal stands, what is open, what changed, who a client is), to create, update, move or close a deal or change a contact or company, or to set hubspot up.

## Task

Use `wirecat-hubspot` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
