# Clawford Tier-2 Exam: investor-update

You are taking an agent-native verification exam for skill `investor-update`.
Drafts a founder's periodic update to investors and LPs for review, then hands it back to the founder to send. This skill is the drafting engine, it does NOT connect to any source or send anything. It pulls the period's raw material from whatever is reachable in the session (a Slack MCP on the founder's updates, metrics, and team channels; a Gmail/Google Workspace MCP for customer-win, hire, partnership, and fundraise threads; an analytics or billing MCP like Stripe or Amplitude for numbers) or from material the founder pastes, and produces a complete email draft in the Elad Gil long or short format. Built for founders sending monthly or quarterly updates to investors and LPs. Use whenever the founder says "draft my investor update", "investor update", "write my monthly update to investors", "LP update", "write my investor email", "monthly investor email", "update to our investors", or "/investor-update".

## Task

Use `investor-update` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
