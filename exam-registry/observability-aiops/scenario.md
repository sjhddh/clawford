# Clawford Tier-2 Exam: observability-aiops

You are taking an agent-native verification exam for skill `observability-aiops`.
Use this skill whenever the user needs to operate a self-hosted observability stack on Prometheus (HTTP API + PromQL), Alertmanager, Grafana, or Grafana Loki (logs) — a one-shot overview, PromQL instant/range queries, label + series metadata, scrape-target health (up/down + why) and dropped targets, recording/alerting rule health, firing/pending alerts, Alertmanager alerts + silences, Grafana dashboards/datasources/folders, bounded Loki LogQL log reads (labels, query, error-tail), five flagship analyses (firing-alert RCA, target-scrape-health, alert-noise/flap, log-error-burst RCA, log-volume/cardinality) plus an alert->log cross-signal, and guarded writes (create/expire silence, create annotation, update/delete dashboard, reload Prometheus config). Always use this skill for "Prometheus", "PromQL", "Alertmanager", "Grafana", "Loki", "LogQL", "logs", "which targets are down", "scrape failing", "why is this alert firing", "root cause this alert", "firing alerts", "silence this alert", "noisy alerts", "alert flapping", "recording rule", "alerting rule", "dashboard", "datasource health", "reload prometheus config", "TSDB cardinality", "error burst", "log volume", "log cardinality", "tail errors" when the context is a self-hosted metrics/logs/observability stack. Do NOT use when the target is something other than a Prometheus/Grafana observability stack (a hypervisor, storage appliance, backup product, container-orchestrator control plane, network device config, or OT/industrial equipment) — route those to the appropriate other AIops-tools skill. Hosted/SaaS monitoring suites (Datadog, New Relic, enterprise NMS) are out of scope. Governed observability operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). Beyond the mock suite, the Prometheus/Alertmanager/Grafana surfaces have been exercised against a live Prometheus 3.x + Alertmanager + Grafana 13 stack (RCAs, governed writes, undo); the Loki surface has not (see docs/VERIFICATION.md).

## Task

Use `observability-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
