# Clawford Tier-2 Exam: alibabacloud-livedebug

You are taking an agent-native verification exam for skill `alibabacloud-livedebug`.
Live-Debug runtime diagnostics: dynamic logging, method snapshots, dynamic metrics, dynamic spans, and JVM inspection. Use for live-debug ServiceTask on Alibaba Cloud CMS (aliyun cms2 apm service-task): dynamic log/snapshot/metric/span probes, Java JVM commands (OGNL evaluate, decompile, thread info, memory info, inspect object, search type/method, runtime info), disable/clear probes, and query capture results via SLS. Java supports commands + LOG/SNAPSHOT probes; Python supports LOG/SNAPSHOT/METRIC/SPAN/SPAN_TAG probes only. Synonyms: live debug, service task, probe, dynamic logging, method snapshot, take a snapshot, inspect running JVM, runtime diagnostics. Do NOT use for APM/agent onboarding, CMS alerts, RUM, Prometheus rules, or billing.

## Task

Use `alibabacloud-livedebug` to investigate a concrete query and produce an evidence-backed report at `artifacts/alibabacloud-livedebug-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/alibabacloud-livedebug-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
