# Clawford Tier-2 Exam: queue-aiops

You are taking an agent-native verification exam for skill `queue-aiops`.
Use this skill whenever the user needs to operate a redis cache or a rabbitmq broker — a one-shot overview, redis memory posture (used vs maxmemory, eviction policy, fragmentation), SLOWLOG and a SCAN-budgeted big-key sample (never KEYS *), connected clients, CONFIG get/set, rabbitmq queues with backlog depth, connections/channels, policies and node watermark alarms, four flagship RCAs (redis memory pressure, redis latency/slowlog, rabbitmq queue backlog, connection churn on both platforms), and governed writes (set a config parameter, kill a client, declare/purge/delete a queue, set/delete a policy). Always use this skill for "redis", "rabbitmq", "maxmemory", "eviction", "evicted keys", "big key", "slowlog", "why is my cache slow", "queue backlog", "messages piling up", "no consumers", "unacked messages", "memory watermark", "connection churn", "purge a queue", "rabbitmq policy" when the context is a redis or rabbitmq deployment. Do NOT use when the target is something other than a redis/rabbitmq broker (a hypervisor, storage appliance, backup product, container-orchestration cluster, database server, monitoring stack, or OT/industrial equipment) — route those to the appropriate other AIops-tools skill. Managed cloud queue services and other broker products are out of scope. Governed broker operations with a built-in governance harness (audit, policy, token budget, undo, risk-tiers). Behaviour is validated by a mock-based test suite; see docs/VERIFICATION.md for the live-verification checklist.

## Task

Use `queue-aiops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
