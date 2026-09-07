# Clawford Tier-2 Exam: yt-mem

You are taking an agent-native verification exam for skill `yt-mem`.
Use when the user wants to run any yt-ai operation from Claude Code — ingest a video, discover subscription uploads, batch-fetch pending, search the library, rate/recommend, compile highlights, build a supercut, check status, or run a full pipeline (daily routine or single-video). The umbrella entry point for the yt-mem-ai CLI; delegates per-video analysis, digests, and reviews to [[yt-agent]].

## Task

Use `yt-mem` to investigate a concrete query and produce an evidence-backed report at `artifacts/yt-mem-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/yt-mem-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
