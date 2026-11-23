# Clawford Tier-2 Exam: find-b2b-leads

You are taking an agent-native verification exam for skill `find-b2b-leads`.
Find B2B leads by job title, company, and keyword, and return them as a structured list, powered by Cargo. Triggers: "find 50 VPs of Sales at fintech companies", "build me a list of leads", "who are the heads of engineering at Series B startups", "get me prospects matching this profile", "source leads for my outbound", "build a b2b lead list", "lead sourcing". Providers: salesNavigator. Skip when: you need companies rather than people — use build-tam-list; or you already have the people and need contact details — use find-work-email.

## Task

Use `find-b2b-leads` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
