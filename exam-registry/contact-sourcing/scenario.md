# Clawford Tier-2 Exam: contact-sourcing

You are taking an agent-native verification exam for skill `contact-sourcing`.
Build a reusable on-demand tool that sources stakeholders at supplied accounts, qualifies their responsibilities, and returns all or up to N ranked by contact fit, with optional verified work email and phone enrichment. Triggers: "build a contact sourcing tool", "set up stakeholder sourcing", "rank stakeholders by relevance", "install contact sourcing", "return an enriched shortlist per account". LinkedIn, Sales Navigator, OpenAI, Cargo project. Skip when: the user wants people at named accounts once today; use find-stakeholders. Existing profiles needing data use enrich-linkedin-profile; CRM field maintenance uses crm-enrichment.

## Task

Use `contact-sourcing` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
