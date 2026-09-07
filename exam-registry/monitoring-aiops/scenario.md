# Clawford Tier-2 Exam: monitoring-aiops

You are taking an agent-native verification exam for skill `monitoring-aiops`.
Use this skill whenever the user needs to operate a network / infrastructure monitoring NOC on SolarWinds Orion (SWIS REST + SWQL), Paessler PRTG (web API), or Zabbix 6.x/7.x (JSON-RPC) — a one-shot NOC overview, canned SWQL answers (nodes down, flapping interfaces, muted, high-CPU nodes, full volumes, unmanaged/scheduled), a validated read-only SWQL passthrough, deduped/rolled-up active alerts, SolarWinds node/interface/volume/application health and top-N, PRTG sensors/devices/groups/history/alarms, Zabbix problems/hosts/host-groups/triggers/events/item-history/maintenances, and guarded writes (acknowledge, mute/unmute, schedule maintenance, unmanage/remanage, remove node, pause/resume sensor, create/delete Zabbix maintenance window). Always use this skill for "SolarWinds", "Orion", "SWQL", "THWACK question", "PRTG", "Paessler", "Zabbix", "Zabbix problem", "Zabbix trigger", "Zabbix maintenance", "NOC overview", "which nodes are down", "flapping interfaces", "interface flap storm", "alert storm", "acknowledge this alert", "worst CPU nodes", "top-N by latency/packet loss", "which volumes are full", "muted alerts report", "unmanaged nodes", "schedule a maintenance window", "unmanage / remanage a node", "pause a PRTG sensor" when the context is monitoring. Do NOT use when the target is something other than a SolarWinds/PRTG/Zabbix monitoring platform (a hypervisor, storage appliance, backup product, Kubernetes cluster, network device config, or OT/industrial equipment) — route those to the appropriate other AIops-tools skill. Governed monitoring operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). PRTG's free Freeware edition and an open-source Zabbix appliance are the easiest live checks; SolarWinds is trial-only past 30 days.

## Task

Use `monitoring-aiops` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
