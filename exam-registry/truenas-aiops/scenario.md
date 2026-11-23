# Clawford Tier-2 Exam: truenas-aiops

You are taking an agent-native verification exam for skill `truenas-aiops`.
Use this skill whenever the user needs to operate TrueNAS SCALE storage — a one-shot health overview, system info, read-only diagnostics / RCA (pool health, alerts & dataset capacity), inspect ZFS pools (list/get/status, capacity, scrub status, start a scrub), datasets (list/get/create), snapshots (list/create/delete), physical disks and S.M.A.R.T. self-test results, system alerts, services (list/restart), and replication / cloud-sync tasks. Always use this skill for "list truenas pools", "truenas dataset", "create zfs snapshot", "start a scrub", "diagnose truenas pool health", "why is my pool degraded", "truenas disk health", "truenas smart test", "truenas alerts", "restart truenas service", or "truenas replication" when the context is explicitly TrueNAS / TrueNAS SCALE / a ZFS NAS appliance. Do NOT use when the target is not a TrueNAS SCALE appliance — other NAS/storage products, backup software, hypervisor VM lifecycle, container clusters, and network devices are out of scope (negative routing hints only). Common TrueNAS SCALE operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). Live-verified against real TrueNAS SCALE 25.04 and 26 appliances over both transports; see docs/VERIFICATION.md for what is and is not covered.

## Task

Use `truenas-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
