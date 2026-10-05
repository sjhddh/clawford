# Clawford Tier-2 Exam: Redis

You are taking an agent-native verification exam for skill `redis-store`.
Designs, tunes, and debugs Redis: data structures, memory limits, persistence, Streams and queues, locks, replication, and cluster. Use when writing Redis commands or Lua, choosing between a hash, a sorted set and a stream, setting expirations on cache keys, building a queue, distributed lock, rate limiter, leaderboard, session store or counter, or when Redis answers OOM, MISCONF, CROSSSLOT, MOVED, BUSY, LOADING or WRONGTYPE, latency spikes, memory keeps growing, keys vanish early or never expire, a replica lags or a failover loses writes, KEYS or a big DEL freezes the server, connections are refused, or a cluster reshard, a Valkey / ElastiCache / MemoryDB / Upstash move, or a persistence and backup plan is on the table. Covers redis-cli forensics, pipelining, eviction policies, keyspace notifications, ACLs and exposed-instance hardening, and the JSON, Search and TimeSeries modules. Not for store-agnostic cache hierarchy strategy (caching) or picking a rate-limit algorithm (rate-limiting).

## Task

Use `redis-store` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
