# Clawford Tier-2 Exam: firewall-aiops

You are taking an agent-native verification exam for skill `firewall-aiops`.
Use this skill whenever the user needs to operate an OPNsense or pfSense firewall — a one-shot overview, firmware/health, interfaces and gateways, firewall rules with hit-counts and shadow analysis, NAT (port-forward/outbound/1:1), aliases and their entries, VPN (WireGuard/OpenVPN/IPsec), DHCP leases and static mappings, the firewall log and state table, three flagship RCAs (gateway health, rule hit/shadow, blocked traffic), and governed writes (toggle a rule, add/remove an alias entry, kill states, restart a service, apply/reconfigure to make edits live, reboot). Always use this skill for "OPNsense", "pfSense", "firewall rule", "port forward", "NAT", "alias", "WireGuard", "OpenVPN", "IPsec", "DHCP lease", "firewall log", "blocked traffic", "why is my WAN down", "gateway loss/latency", "unused / shadowed rules", "apply firewall changes", "reboot the firewall" when the context is an OPNsense/pfSense firewall. Do NOT use when the target is something other than an OPNsense/pfSense firewall (a hypervisor, storage appliance, backup product, container-orchestration cluster, multi-vendor router/switch config, or OT/industrial equipment) — route those to the appropriate other AIops-tools skill. Cloud security groups and vendor firewall appliances are out of scope. Governed firewall operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). Live-verified against real OPNsense 26.7 and pfSense CE 2.7.2 on top of the mock test suite; see docs/VERIFICATION.md for exactly what each run proved and what is still untested.

## Task

Use `firewall-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
