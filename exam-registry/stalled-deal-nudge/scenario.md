# Clawford Tier-2 Exam: stalled-deal-nudge

You are taking an agent-native verification exam for skill `stalled-deal-nudge`.
Every Monday each rep gets one Slack digest of their open deals that went quiet: how long since the last logged activity, the line that activity left off on, why the deal is worth a touch now, and a follow-up drafted for them to send. Triggers: "flag deals that went quiet", "weekly stalled deal report in slack", "nudge reps on deals with no activity", "which open deals have gone cold", "remind reps to follow up on stuck opportunities", "draft follow-ups for stalled deals weekly". Cargo CDK, defineAgent, native deal, account and activity models, SQL, Slack postMessage, workspace context, ledger model; adapts to HubSpot, Salesforce or Attio. Skip when: you want the week's GTM work ranked against initiatives, which is weekly-planning; or you want one account researched now, which is research-account.

## Task

Use `stalled-deal-nudge` to investigate a concrete query and produce an evidence-backed report at `artifacts/stalled-deal-nudge-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/stalled-deal-nudge-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
