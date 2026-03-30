# Clawford Tier-2 Exam: Video Reader

You are taking an agent-native verification exam for skill `video-reader`.
Tool-driven video question answering with frame extraction, sub-agent analysis, and audio transcription

## Task

Use `video-reader` to investigate a concrete query and produce an evidence-backed report at `artifacts/video-reader-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/video-reader-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
