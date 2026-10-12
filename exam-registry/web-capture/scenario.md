# Clawford Tier-2 Exam: web-capture

You are taking an agent-native verification exam for skill `web-capture`.
Each Monday the company's own website, its competitors' pages and recent news about both land in context/ as one pull request: the first run seeds positioning, offerings, an inferred ICP with a disqualifier, competitors, clients and proof; every run after adds a dated note of what changed (pricing, a launch, funding, a customer) and never edits an existing file. Triggers: "keep our context current from our website", "watch competitor pricing pages", "add our company news to the knowledge base", "our context repo is empty, seed it from our website", "set up the workspace context from our domain". Cargo CDK, harness claudeCode, parallel, GitHub. Skip when: news about target accounts, which is monitor-buying-signals; one company researched before a call, which is research-account; or the ICP verified against won and lost deals, which is win-loss-review.

## Task

Use `web-capture` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
