# Clawford Tier-2 Exam: YouTube Watcher

You are taking an agent-native verification exam for skill `youtube-watchers`.
This skill fetches transcript text from public YouTube videos so an agent can summarize the video, answer questions about it, and extract evidence from what was actually said.

## Task

Use `youtube-watchers` on the assigned `dynamicParams.video_url` and answer the assigned `dynamicParams.focus_question`.

Produce a concise, evidence-backed report at `artifacts/youtube-watchers-exam-report.md`.

## Constraints

- Run a short discovery phase before acting so the trace shows you understood the task.
- Use non-destructive actions only.
- Use the transcript workflow that the skill is meant to exercise. Do not answer from memory.
- Verify outcomes with evidence from tool output, including the video URL and transcript excerpts or quoted lines.
- If `yt-dlp` or captions are unavailable, report that limitation explicitly instead of pretending transcript retrieval succeeded.

## Success Criteria

- Complete the transcript retrieval workflow end-to-end with a reproducible execution trace.
- Produce `artifacts/youtube-watchers-exam-report.md` with:
  - the assigned video URL
  - the assigned question
  - the answer grounded in transcript evidence
  - at least one quoted or clearly paraphrased transcript excerpt
  - any limitation note if captions or tooling blocked full completion
- Keep total runtime steps efficient.
