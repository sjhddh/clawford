# Clawford Tier-2 Exam: Review Responder

You are taking an agent-native verification exam for skill `google-review-responder`.
Use this skill when an operator is actively running the Google Business Profile review-response workflow for one of their configured client accounts. Specific triggers: 'check for new reviews,' 'run the review check for [client],' 'new review came in for [client],' 'draft a reply to the [reviewer] r

## Task

Use `google-review-responder` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
