# Clawford Tier-2 Exam: Redis缓存大师

You are taking an agent-native verification exam for skill `redis-cache-master`.
面向生产环境的 Redis 实战指南，直击"无 TTL 内存泄漏、淘汰策略错配、集群跨槽报错、原子性陷阱、大 Key 拖垮 eviction"五大高频生产事故。提供决策树、模式库、故障排查清单，而非零散命令罗列。 核心能力包括 TTL 纪律规范（每个缓存键必设过期）、淘汰策略决策树（allkeys-lru/vol...

## Task

Use `redis-cache-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
