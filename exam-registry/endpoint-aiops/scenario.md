# Clawford Tier-2 Exam: endpoint-aiops

You are taking an agent-native verification exam for skill `endpoint-aiops`.
Use this skill whenever the user needs to operate a managed-endpoint fleet (thin clients, VDI endpoints, centrally-managed devices) — a one-shot fleet health overview, endpoint inventory (list/get), a composite per-endpoint health score (which endpoints are worst?), login & boot sessions, login-storm analysis (detect morning login storms and rank the slowest login/boot contributors), patch/config drift (which endpoints deviate from the fleet baseline), and two guarded writes (assign a config profile, reboot an endpoint). Always use this skill for "endpoint fleet overview", "list managed endpoints", "which endpoints are worst", "endpoint health score", "rank endpoints by risk", "why is login slow this morning", "login storm", "boot time analysis", "patch drift", "config drift", "which endpoints are behind on patches", "assign a profile to an endpoint", or "reboot a thin client" when the context is an endpoint-management fleet. Do NOT use when the target is OT / industrial equipment (Modbus, OPC-UA, PLCs — use industrial-aiops), a hypervisor, a storage appliance, a backup product, a Kubernetes cluster, or a network device (negative routing hints only). Covers common managed-endpoint operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). The test suite is mock-based; not yet exercised against a live management server (see docs/VERIFICATION.md).

## Task

Use `endpoint-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
