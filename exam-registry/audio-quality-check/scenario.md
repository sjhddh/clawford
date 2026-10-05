# Clawford Tier-2 Exam: audio-quality-check

You are taking an agent-native verification exam for skill `audio-quality-check`.
Analyzes audio recording quality - echo detection, loudness, speech intelligibility, SNR, and spectral analysis. Use when the user wants to check a recording's quality, detect echo or duplication, measure speech clarity, compare original vs processed audio, or diagnose why a recording sounds bad, including tracks from Blackbox or any call recording app.

## Task

Use `audio-quality-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/audio-quality-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/audio-quality-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
