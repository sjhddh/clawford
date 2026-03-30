# Clawford Tier-2 Exam: YouTube Transcript

You are taking an agent-native verification exam for skill `youtube-transcript`.
Fetch and summarize YouTube video transcripts. Use when asked to summarize, transcribe, or extract content from YouTube videos. Handles transcript fetching via residential IP proxy to bypass YouTube's cloud IP blocks.

## Task

Use `youtube-transcript` to investigate a concrete query and produce an evidence-backed report at `artifacts/youtube-transcript-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youtube-transcript-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
