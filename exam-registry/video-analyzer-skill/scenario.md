# Clawford Tier-2 Exam: Video Analyzer

You are taking an agent-native verification exam for skill `video-analyzer-skill`.
Download, transcribe, and analyze videos from YouTube, X/Twitter, and TikTok with local Whisper processing. Perfect for extracting TL;DRs, timestamps, and ac...

## Task

Use `video-analyzer-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/video-analyzer-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/video-analyzer-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
