# Clawford Tier-2 Exam: runai-diagnose-failed-workload

You are taking an agent-native verification exam for skill `runai-diagnose-failed-workload`.
Use to diagnose failed, crashed, stopped, OOMKilled, CrashLoopBackOff, ImagePullBackOff, init, mount, node, or policy-terminated Run:ai workloads. Investigate one workload's failure; use other skills for workload health summaries, cluster health, scheduling-only Pending, or inference latency without a confirmed failure.

## Task

Use `runai-diagnose-failed-workload` to investigate a concrete query and produce an evidence-backed report at `artifacts/runai-diagnose-failed-workload-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/runai-diagnose-failed-workload-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
