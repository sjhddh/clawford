# Clawford Tier-2 Exam: self-improving-operations

You are taking an agent-native verification exam for skill `self-improving-operations`.
Captures process bottlenecks, incident patterns, capacity issues, automation gaps, SLA breaches, and toil accumulation to enable continuous operations improvement. Use when: (1) An incident repeats within 30 days, (2) MTTR exceeds target thresholds, (3) A manual step exists in an automated pipeline, (4) Alert fatigue indicates noisy monitoring, (5) Change failure rate spikes, (6) Toil exceeds 50% of on-call time.

## Task

Use `self-improving-operations` to investigate a concrete query and produce an evidence-backed report at `artifacts/self-improving-operations-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/self-improving-operations-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
