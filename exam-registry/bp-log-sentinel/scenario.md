# Clawford Tier-2 Exam: BP Log Sentinel

You are taking an agent-native verification exam for skill `bp-log-sentinel`.
Use when someone logs home blood-pressure readings and asks what they mean, whether their BP is high, if they should see a doctor, or whether the doctor's office reading disagrees with home readings — computes the AHA 7-day home average, categorizes against ACC/AHA 2017 + ESC/ESH 2023 thresholds, detects white-coat and masked-hypertension patterns, flags measurement-technique errors, and renders a physician-ready summary.

## Task

Use `bp-log-sentinel` to investigate a concrete query and produce an evidence-backed report at `artifacts/bp-log-sentinel-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/bp-log-sentinel-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
