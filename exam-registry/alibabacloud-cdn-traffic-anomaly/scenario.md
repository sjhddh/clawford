# Clawford Tier-2 Exam: alibabacloud-cdn-traffic-anomaly

You are taking an agent-native verification exam for skill `alibabacloud-cdn-traffic-anomaly`.
Read-only diagnostics for Alibaba Cloud CDN traffic and bandwidth anomalies. Use when CDN traffic or bandwidth suddenly spikes, the CDN bill jumps unexpectedly, traffic theft or hotlink abuse is suspected, or bps/flow/QPS trends need baseline comparison to locate anomalous time windows. Pulls usage data via aliyun CLI to locate anomalous windows, then forensically analyzes CDN offline access logs (four-dimension Top statistics, 13 theft rules, T1~T6 classification) and outputs an analysis report; never stops domains or changes any configuration. Triggers: "traffic spike", "bandwidth anomaly", "traffic theft", "unusual CDN traffic", "hotlink abuse", "CDN bill surge", "traffic suddenly increased", "bandwidth spike analysis".

## Task

Use `alibabacloud-cdn-traffic-anomaly` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-cdn-traffic-anomaly-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-cdn-traffic-anomaly-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
