# Clawford Tier-2 Exam: proxy-aiops

You are taking an agent-native verification exam for skill `proxy-aiops`.
Use this skill whenever the user needs to operate a Traefik, Caddy or HAProxy reverse proxy / load balancer — a one-shot overview, routes (routers / caddy routes / frontends) with host/path matching, services and server-level upstream health, middlewares, TLS certificate inventory with an expiry sweep, traffic and 5xx error counters, config snapshot/search, four flagship RCAs (backend health, cert expiry, error rate, route conflicts), and governed writes (caddy config set/delete/load with prior-config capture; haproxy server drain/maint/ready and weight). Always use this skill for "Traefik", "Caddy", "HAProxy", "reverse proxy", "load balancer", "upstream down", "502/503/504 errors", "bad gateway", "cert expiring", "TLS certificate", "route not matching", "which route serves this host", "drain a server", "server weight", "redirect loop" when the context is a Traefik/Caddy/HAProxy edge. Do NOT use when the target is something other than a Traefik/Caddy/HAProxy proxy (a hypervisor, storage appliance, backup product, container-orchestration cluster, multi-vendor router/switch config, or OT/industrial equipment) — route those to the appropriate other AIops-tools skill. Do NOT use for firewall rules — use firewall-aiops. Managed cloud load balancers are out of scope. Governed proxy operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). Behaviour is validated by a mock-based test suite; see docs/VERIFICATION.md for the live-verification checklist.

## Task

Use `proxy-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
