# Clawford Tier-2 Exam: new-hire-detection

You are taking an agent-native verification exam for skill `new-hire-detection`.
Get a Slack alert when a decision-maker joins a company in your ICP: a Sales Navigator job-change search watches your market for people who just took a role you sell to, an agent qualifies each one's new company against your ICP, and fits are posted with verdict and links. Triggers: "watch our market for new hires", "put new VPs of Sales in our market into HubSpot", "post in Slack when a new VP Sales joins a company in our ICP", "a decision-maker just joined a company in our market", "a new head of sales starts at an account", "new KDM detection", "route new hires into the CRM", "tell the deal owner when a new decision-maker lands mid-deal", "run our new-hire play on a schedule". Cargo project, Sales Navigator, Slack, HubSpot, Salesforce, Attio. Skip when: your own CRM contacts may have moved jobs, which is track-job-changes; or you want a list of people once, which is find-b2b-leads.

## Task

Use `new-hire-detection` to investigate a concrete query and produce an evidence-backed report at `artifacts/new-hire-detection-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/new-hire-detection-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
