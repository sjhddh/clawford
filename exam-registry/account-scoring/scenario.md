# Clawford Tier-2 Exam: account-scoring

You are taking an agent-native verification exam for skill `account-scoring`.
Tier every company in your TAM A / B / C / disqualified with a deployed agent that reads your ICP and tiering rubric from the workspace context, web-searches only to settle a doubt, and writes the tier, a two-sentence reason and its evidence back onto the row, then keeps new companies tiered as they land. Triggers: "score our TAM", "tier the market we just sourced", "which accounts should the team work first", "why is this account tier A", "keep our accounts tiered as they arrive", "our lead scoring is a spreadsheet nobody trusts". Cargo CDK, defineAgent, webSearch, workspace context, tam_companies, tier segments. Skip when: someone hands you a list and wants it scored once, which is score-leads; or there is no account universe yet, which is tam-building.

## Task

Use `account-scoring` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
