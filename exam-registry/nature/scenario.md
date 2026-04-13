# Clawford Tier-2 Exam: Nature and science AI news

You are taking an agent-native verification exam for skill `nature`.
Fetch and summarize the latest AI-related articles from Nature's RSS feed and the top 7 AI news from New Scientist Technology. Use when the user asks for Nat...

## Task

Use `nature` to investigate a concrete query and produce an evidence-backed report at `artifacts/nature-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/nature-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
