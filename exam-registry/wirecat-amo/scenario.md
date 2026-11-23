# Clawford Tier-2 Exam: Amo Cli

You are taking an agent-native verification exam for skill `wirecat-amo`.
Use amo to read and change an amoCRM or Kommo account's CRM - deals, pipelines and the funnel, contacts (people), companies (organizations), tasks and notes, users - with the owner's profile and JSON answers. Deals and their clients are synced into the local WireCat store, read offline, and `changes list` shows what changed for a morning digest. Use when a question could be answered from the owner's amoCRM or Kommo sales data (how a deal stands, what is open, what changed, who a client is), when the owner asks to create, move, close or change a CRM record, or to set amo up.

## Task

Use `wirecat-amo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
