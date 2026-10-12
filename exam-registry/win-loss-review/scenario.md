# Clawford Tier-2 Exam: win-loss-review

You are taking an agent-native verification exam for skill `win-loss-review`.
Every month the CRM's closed deals are audited and what they say lands in context/ as one pull request: the ICP verified against won versus lost with a disqualifier, dated insights with counts and denominators, objections from recorded lost reasons, and a client file per closed-won account; a five-line Slack digest says what changed. Never edits a persona, nor the ICP after the first pass. Triggers: "verify our ICP against won and lost deals", "what do closed-lost deals say about who we should not sell to", "keep the context repo current from the CRM every month", "our lost reasons should become objections", "run a monthly win-loss review". Cargo CDK, harness claudeCode, HubSpot, Salesforce, Attio, Slack. Skip when: there is no CRM yet and the context should come from the website, which is web-capture; or you want one account researched before a call, which is research-account.

## Task

Use `win-loss-review` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
