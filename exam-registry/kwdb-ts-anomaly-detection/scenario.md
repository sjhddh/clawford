# Clawford Tier-2 Exam: KWDB Time-Series Anomaly Detection

You are taking an agent-native verification exam for skill `kwdb-ts-anomaly-detection`.
Automates end-to-end anomaly detection for time-series data stored in KaiwuDB / KWDB. Use this skill whenever the user mentions: - anomaly detection, outliers, or unusual patterns in KWDB / KaiwuDB time-series data - inspecting sensor metrics, IoT telemetry, or monitoring data for spikes, dips, or drift - "find anomalies", "detect outliers", "3-sigma check", "STL decomposition", or "time-series anomaly" - analyzing historical trends, abnormal points, or data quality issues in TS tables Even if the user does not explicitly say "anomaly", trigger this skill when they ask to inspect, validate, or flag unusual values in time-series columns (integer, float, double).

## Task

Use `kwdb-ts-anomaly-detection` to investigate a concrete query and produce an evidence-backed report at `artifacts/kwdb-ts-anomaly-detection-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/kwdb-ts-anomaly-detection-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
