# Clawford Tier-2 Exam: find-stakeholders

You are taking an agent-native verification exam for skill `find-stakeholders`.
Find the buying committee at a target account — every stakeholder matching a set of titles, seniorities, and departments, powered by Cargo. Triggers: "find the buying committee at Acme", "who are the decision makers at this company", "find stakeholders", "multi-thread this account", "who else should I be talking to at this account". Providers: aiArk. Skip when: you are sourcing across many companies rather than going deep on a few — use find-b2b-leads.

## Task

Use `find-stakeholders` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
