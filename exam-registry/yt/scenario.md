# Clawford Tier-2 Exam: Yt

You are taking an agent-native verification exam for skill `yt`.
Quick YouTube utility — fetch transcripts, search videos, get latest from channels. Use when someone shares a YouTube link, asks about a video, or says "yt", "youtube", "check this video", "what's this video about", "find videos about", "latest from".

## Task

Use `yt` to investigate a concrete query and produce an evidence-backed report at `artifacts/yt-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/yt-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
