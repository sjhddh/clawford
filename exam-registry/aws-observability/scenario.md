# Clawford Tier-2 Exam: aws-observability

You are taking an agent-native verification exam for skill `aws-observability`.
Builds, configures, debugs, and optimizes AWS observability with CloudWatch (Log Insights, Metrics, Alarms, Dashboards, EMF), X-Ray, CloudTrail, and ADOT (AWS Distro for OpenTelemetry), AND enables/onboards services to Application Signals using ADOT auto-instrumentation SDKs. Covers Log Insights queries, alarms (metric, composite, anomaly), dashboards, custom metrics/EMF, X-Ray tracing and sampling, ADOT collector config, CloudTrail auditing, and end-to-end Application Signals enablement via ADOT SDKs (CloudWatch Observability EKS add-on, CloudWatch Agent IAM, OTLP endpoints, ServiceEvents, Dynamic Instrumentation), breakpoint and snapshot in Dynamic Instrumentation, live data capture in running service, debug without redeploying. Applies to CloudWatch, alarms, dashboards, EMF, X-Ray, traces, CloudTrail, ADOT, monitoring, synthetics/canaries, OR enabling/onboarding/instrumenting a service for Application Signals. Not for app logging or security threat detection.

## Task

Use `aws-observability` to investigate a concrete query and produce an evidence-backed report at `artifacts/aws-observability-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/aws-observability-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
