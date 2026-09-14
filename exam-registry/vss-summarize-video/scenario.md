# Clawford Tier-2 Exam: vss-summarize-video

You are taking an agent-native verification exam for skill `vss-summarize-video`.
Use to summarize a recorded video via the LVS summarization microservice (HITL-gated) with a VLM fallback. Not for report generation or live RTSP captioning.

## Task

Use `vss-summarize-video` to investigate a concrete query and produce an evidence-backed report at `artifacts/vss-summarize-video-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vss-summarize-video-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
