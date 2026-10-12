# Clawford Tier-2 Exam: tt_live

You are taking an agent-native verification exam for skill `tt-live`.
TikTok LIVE monitor. Check whether a TikTok user is live right now, resolve their current m3u8 stream URL, or spawn a background daemon that polls them over a timer window and emits go_live / go_offline / rename_detected events for the sub-agent to announce.

## Task

Use `tt-live` to investigate a concrete query and produce an evidence-backed report at `artifacts/tt-live-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tt-live-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
