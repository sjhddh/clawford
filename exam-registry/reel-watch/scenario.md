# Clawford Tier-2 Exam: reel-watch

You are taking an agent-native verification exam for skill `reel-watch`.
Watch a video for the user: Instagram reels, TikToks, YouTube, X or local files. Gemini watches it with audio (or local frames + Whisper without a key), then you report the exact tools, links, repos and commands it shows. Use when a message has a video link or file.

## Task

Use `reel-watch` to investigate a concrete query and produce an evidence-backed report at `artifacts/reel-watch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/reel-watch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
