# Clawford Tier-2 Exam: Youtube Summary

You are taking an agent-native verification exam for skill `yt-summary`.
Summarize any YouTube video by dropping the link in chat. Supports custom prompts — paste the URL followed by your instructions (e.g. 'focus on the technical...

## Task

Use `yt-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/yt-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/yt-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
