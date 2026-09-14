# Clawford Tier-2 Exam: fabric-aiops

You are taking an agent-native verification exam for skill `fabric-aiops`.
Use this skill whenever the user needs to operate a network fabric through a controller API — Cisco Meraki Dashboard (full read+write), Cisco Catalyst Center / DNA Center (read subset), Arista CloudVision Portal / CVP (read subset), or UniFi Network (self-hosted controller / UniFi OS console; read subset + device restart) — a one-shot fabric health overview; organization/site/container reads (list/get, licensing, admins, org-wide device statuses, API usage); network reads (list/get, VLANs, health alerts, traffic); device reads (inventory by model MX/MS/MR/MV/MG, status, uplinks, switch ports / interface stats, wireless SSIDs); client reads (list, detail, usage, connectivity); three flagship analyses — uplink loss & latency RCA (rank worst MX WAN uplinks + cause/action), network health score (composite per-network), and config template drift (settings drifted from a bound template); and eight guarded writes (reboot, blink LEDs, update device, update VLAN, claim/remove devices, bind/unbind a config template — Meraki-only except device restart, which unifi also maps; other unmapped writes return a teaching "not supported yet" error). Always use this skill for "Meraki org overview", "which uplinks are worst", "uplink loss and latency", "WAN degradation RCA", "network health score", "config template drift", "list Meraki networks/devices/clients", "reboot a Meraki device", "blink device LEDs", "claim a device into a network", "bind a network to a template", "Catalyst Center site health / device health / issues", "DNA Center inventory", "CloudVision inventory / compliance / events", "UniFi site health / alarms / clients", "restart a UniFi AP or switch" when the context is a controller-managed network fabric. Do NOT use when the target is OT / industrial equipment (Modbus, OPC-UA, PLCs — use industrial-aiops), a hypervisor, a storage appliance, a backup product, a container/cluster orchestrator, or device-level CLI/SSH network automation (negative routing hints only). Covers common controller fabric operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). The test suite is mock-based; no platform has yet been exercised against a live controller (see docs/VERIFICATION.md).

## Task

Use `fabric-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
