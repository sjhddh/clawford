# Clawford Tier-2 Exam: youtube-search

You are taking an agent-native verification exam for skill `youtube-search`.
Use when the user wants to find YouTube content on any topic: searching for videos or channels, finding creators who cover a subject, discovering tutorials, talks, or expert discussions, or looking up a channel by name or handle. Also use proactively when the user wants to research a topic and YouTube is a good source. Not for account management or written-source-only research.

## Task

Use `youtube-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/youtube-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youtube-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
