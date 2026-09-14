# Clawford Tier-2 Exam: account-scoring

You are taking an agent-native verification exam for skill `account-scoring`.
Keep every account scored and tiered against your written ICP by a deployed agent that re-scores as accounts arrive and as the ICP changes, writing the rationale back to the CRM. Triggers: "keep our accounts scored as they arrive", "re-score everything when the ICP changes", "which accounts should the team work first", "our scoring is a spreadsheet nobody trusts", "why is this account tier A", "stand up account tiering". Cargo CDK, defineAgent, cargo_score, cargo_tier, HubSpot, Salesforce, Attio. Skip when: someone hands you a list and wants it qualified once, which is cargo-gtm's job, not a deployed scorer's.

## Task

Use `account-scoring` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
