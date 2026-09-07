# Clawford Tier-2 Exam: network-aiops

You are taking an agent-native verification exam for skill `network-aiops`.
Use this skill whenever the user needs to operate a network device — read device facts, interfaces (+ counters/IP), BGP/LLDP neighbors (summary and detail), ARP/MAC tables, VLANs, routes, hardware environment (fans/temp/power/CPU/mem), optics, NTP, users, SNMP info, VRFs, and an aggregated device-health summary; run read-only RCA diagnostics on interface health and BGP neighbors; back up a switch/router config, diff a candidate config (dry-run), and merge/replace/rollback config — across Cisco IOS/IOS-XE, Nexus NX-OS, IOS-XR, Arista EOS, and Juniper Junos via NAPALM. An optional NetBox block adds source-of-truth lookups. Always use this skill for "back up switch config", "show bgp neighbors", "diff network config", "push config to router", "show interfaces on the switch", or tasks mentioning "cisco", "arista", "juniper", "nexus", "ios-xr", or "napalm". Do NOT use when the target is not a NAPALM-supported network device (Kubernetes clusters, hypervisor VMs, and cloud consoles are out of scope — route those elsewhere). Common multi-vendor device operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `network-aiops` to investigate a concrete query and produce an evidence-backed report at `artifacts/network-aiops-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/network-aiops-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
