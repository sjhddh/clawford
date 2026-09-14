# Clawford Tier-2 Exam: call-capture

You are taking an agent-native verification exam for skill `call-capture`.
Every call the team records is collected into the cadence layer each morning, scribed into a log entry, and — once a claim repeats — promoted into the context knowledge layer, as one reviewable pull request against your GTM repo. Triggers: "our call recordings never make it into the knowledge base", "turn our call transcripts into context", "keep our context updated from sales calls", "we relearn the same objection every quarter", "scribe yesterday's calls into the repo every morning", "replace the GitHub Action that summarizes our meetings". Cargo CDK, defineAgent, harnessSlug claudeCode, repository env, GitHub, Avoma, Gong, Fireflies, cadence, context. Skip when: you want one call summarized right now, which is a read against the recorder's own API and needs nothing deployed.

## Task

Use `call-capture` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
