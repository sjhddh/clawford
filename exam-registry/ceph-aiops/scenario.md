# Clawford Tier-2 Exam: ceph-aiops

You are taking an agent-native verification exam for skill `ceph-aiops`.
Use this skill whenever the user needs to operate or diagnose a Ceph cluster via its ceph-mgr Dashboard REST API — decode a HEALTH_WARN/ERR state into cause + action (cluster_health), read the cluster status, inspect OSDs (tree/df/perf), placement groups (summary/stuck/scrub), pools (list/usable capacity), RBD images and snapshots, CephFS/MDS and RGW status, monitors/managers, slow ops and capacity forecast — plus governed writes (set cluster flags, reweight/mark-in/mark-out/purge OSDs, trigger scrubs, set pool quota/pg_num/autoscale/size, create/delete pools, create/delete RBD images and snapshots, throttle recovery/backfill). Always use this skill for "ceph health", "what does this HEALTH_WARN mean", "PG_DEGRADED / OSD_NEARFULL / SLOW_OPS / MON_DOWN", "ceph -s", "which OSD is most full", "drain an OSD", "purge an OSD", "stuck PGs", "overdue scrub", "pool usable capacity", "set pool size / quota", "rebalance is too slow / throttle backfill", "RBD image or snapshot", "MDS behind on trimming", "RGW large omap", "mon quorum", or "days to nearfull" when the context is a Ceph cluster (cephadm, hypervisor-bundled Ceph, or MicroCeph). Do NOT use when the target is not Ceph — a hypervisor, a different storage appliance, a backup product, a Kubernetes cluster, or a network device. Route those to the appropriate other AIops-tools skill (negative routing hint only). Common Ceph ops with a built-in governance harness (audit, policy, token budget, undo, risk-tiers).

## Task

Use `ceph-aiops` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
