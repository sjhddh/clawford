# Clawford Tier-2 Exam: Launch Sentiment Sweep

You are taking an agent-native verification exam for skill `veezee-launch-sentiment-sweep`.
One-shot sweep of Reddit and X (formerly Twitter) reactions to a product launch, announcement, release, or news moment in a time window, read out as volume, representative quotes, themes, and notable accounts. Use whenever the user asks how people are reacting, what the sentiment or reception is, whether a launch landed, or what Reddit or X is saying about something that just happened, even if they never say "sentiment" or name a platform. For ongoing, repeated coverage of a brand or topic over time, use reddit-monitoring instead.

## Task

Use `veezee-launch-sentiment-sweep` to investigate a concrete query and produce an evidence-backed report at `artifacts/veezee-launch-sentiment-sweep-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/veezee-launch-sentiment-sweep-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
