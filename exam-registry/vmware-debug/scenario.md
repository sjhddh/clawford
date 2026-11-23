# Clawford Tier-2 Exam: vmware-debug

You are taking an agent-native verification exam for skill `vmware-debug`.
Use to diagnose VMware/vSphere/ESXi/NSX incidents: errors, log dumps, slow VMs, disconnected hosts, or an unexplained failure. Correlates companion-skill evidence into a timeline, ranks root-cause hypotheses, and recommends the next check. Trigger on "diagnose this VMware issue", "why is my VM slow", "troubleshoot this vSphere error" or "what does this log mean". Its CLI/MCP tools make no VMware API calls or repairs; optional Python host bindings call explicitly supplied companion MCP sessions; writes local case records and a separate audit trail. Default stdio is local; optional authenticated HTTPS uses caller tokens and TLS files. Route fixes to vmware-aiops (single action) or vmware-pilot (gated workflow), and routine inventory/health without an incident to vmware-monitor.

## Task

Use `vmware-debug` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
