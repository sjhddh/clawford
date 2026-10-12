# Clawford Tier-2 Exam: social-listening

You are taking an agent-native verification exam for skill `social-listening`.
Every Monday the week's public LinkedIn posts about the problem you solve are searched, judged against your ICP, and posted to Slack as one digest: the conversations worth joining, and the commenters in them who look like buyers, each quoted with a link. Triggers: "tell me which linkedin posts we should comment on", "watch linkedin for people talking about our problem", "social listening on linkedin", "weekly digest of linkedin conversations in our space", "who is engaging with posts about our category", "monitor linkedin posts mentioning our competitors". Cargo CDK, LinkedIn fetchPosts, searchPostComments, defineModel, defineAgent, Slack postMessage. Skip when: you want named target accounts checked for hiring, news or detection-feed events, once, which is monitor-buying-signals; or you want people who just took a role you sell to, which is new-hire-detection.

## Task

Use `social-listening` to investigate a concrete query and produce an evidence-backed report at `artifacts/social-listening-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/social-listening-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
