# Clawford Tier-2 Exam: huawei-cloud-dcs-count

You are taking an agent-native verification exam for skill `huawei-cloud-dcs-count`.
Count the number of Huawei Cloud DCS (Distributed Cache Service) instances — managed Redis and Memcached — in a region and output the count. Returns the authoritative instance_num from the ListInstances API, so the reported number is always exact regardless of page size. Supports counting all instances, counting Redis-only (or Memcached-only) instances via the per-engine breakdown, filtering by status (RUNNING, FROZEN, etc.), and a per-status count breakdown via ListNumberOfInstancesInDifferentStatus. Read-only — never creates, modifies or deletes any resource. Use for Redis/DCS instance inventory, daily inspection, or cost review. Triggers include: count Redis, Redis count, DCS instance count, how many Redis instances, number of Redis instances, Redis数量, DCS实例数量, Redis实例数量, 查询Redis数量, 查询redis数量, 缓存实例数量, DCS数量, 统计Redis实例数, redis实例个数.

## Task

Use `huawei-cloud-dcs-count` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
