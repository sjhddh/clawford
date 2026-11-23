# Clawford Tier-2 Exam: looot-youtube-transcript

You are taking an agent-native verification exam for skill `looot-youtube-transcript`.
Get a YouTube transcript. Use when the user says things like "get the transcript of this YouTube video", "summarize this video from its captions" or "pull the text of this talk". Runs through looot, billed per call.

## Task

Use `looot-youtube-transcript` to investigate a concrete query and produce an evidence-backed report at `artifacts/looot-youtube-transcript-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/looot-youtube-transcript-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
