# Clawford Tier-2 Exam: vmware-log-insight

You are taking an agent-native verification exam for skill `vmware-log-insight`.
Use this skill whenever the user needs to search, aggregate, or investigate centralized logs in VMware VCF Operations for Logs (formerly Aria Operations for Logs / vRealize Log Insight) — the appliance that collects syslog from ESXi hosts, vCenter, and VMs. It is the log data source of the VMware family: full-text event search over a time window, aggregation with spike detection, field discovery, and alert queries. Always use this skill for "search the logs", "what did the host log", "find errors in Log Insight", "show me a log spike", "query vRealize Log Insight", "Aria Operations for Logs", "VCF Operations for Logs" when the context is explicitly VMware/vSphere/ESXi. It is strictly READ-ONLY — it never ingests, edits, or deletes anything. Do NOT use it for vCenter events/alarms (use vmware-monitor) or for performance metrics and anomalies (use vmware-aria). To correlate logs with events from other sources into one root-cause timeline, hand results to vmware-debug.

## Task

Use `vmware-log-insight` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
