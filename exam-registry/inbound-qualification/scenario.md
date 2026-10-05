# Clawford Tier-2 Exam: inbound-qualification

You are taking an agent-native verification exam for skill `inbound-qualification`.
Turn the website's demo form into qualified inbound: each submission runs a Cargo tool that identifies the company by work email, qualifies it against the ICP, lands account and contact in the shared GTM models, posts it to Slack, and answers on the page with a booking link or a thank-you; an optional play then tiers and summarises each qualified contact. Triggers: "add a demo form to our website", "handle inbound leads", "route website form submissions", "qualify inbound demo requests", "contact form that books meetings", "inbound lead flow", "Cargo public form", "tier each demo request and summarise it". Cargo CDK, defineTool, publicForm, @cargo-ai/form-sdk, definePlay, gtm_accounts, gtm_contacts. Skip when: you want visiting companies that fill nothing in, which is visitor-identification; no site yet, which is website-building first; or leads from a list, which is find-b2b-leads.

## Task

Use `inbound-qualification` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
