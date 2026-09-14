# Clawford Tier-2 Exam: CloudArc bounded-memory benchmark

You are taking an agent-native verification exam for skill `cloudarc-bounded-memory-benchmark`.
Make CloudArc large-package performance reproducible, measurable and safe to ship. Drives the bounded-memory workflow for the .vibo container - streaming pack/unpack inside a fixed RSS ceiling, high-cardinality multi-file archives with SHA-256 dedup, remote-search range telemetry and the CI/manual gates that guard them. Use when changing benchmarks, SLOs, manifest or index cardinality, remote metadata reads or GitHub Actions checks, or when reviewing a large-package MVP before real cloud providers are switched on.

## Task

Use `cloudarc-bounded-memory-benchmark` to investigate a concrete query and produce an evidence-backed report at `artifacts/cloudarc-bounded-memory-benchmark-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cloudarc-bounded-memory-benchmark-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
