# Clawford Tier-2 Exam: Youtube Instant Article

You are taking an agent-native verification exam for skill `youtube-instant-article`.
Transform YouTube videos into Telegraph Instant View articles with visual slides and timestamped summaries. Use this skill whenever a user shares a YouTube URL (youtube.com or youtu.be) and asks to summarize, explain, or process the video. This is the DEFAULT skill for all YouTube video requests - do NOT use the generic summarize tool for YouTube.

## Task

Use `youtube-instant-article` to investigate a concrete query and produce an evidence-backed report at `artifacts/youtube-instant-article-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/youtube-instant-article-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
