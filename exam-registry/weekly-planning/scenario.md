# Clawford Tier-2 Exam: weekly-planning

You are taking an agent-native verification exam for skill `weekly-planning`.
Every Monday last week's GTM work is ranked against active initiatives, declared infra, and live runs, as one reviewable pull request per initiative — or one workspace pull request when there are none. Triggers: "what should we work on this week", "rank our initiatives against what is actually running", "weekly GTM plan from the cadence log", "recommend next work from infra and runs", "the play is deployed but I don't think it ran". Cargo CDK, defineAgent, harness claudeCode, GitHub, cargo-ai CLI reads, initiatives, cadence. Skip when: you want today recapped and posted to Slack, which is standup; or you want call transcripts scribed into context, which is call-capture.

## Task

Use `weekly-planning` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
