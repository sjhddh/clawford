# Clawford Tier-2 Exam: proxq

You are taking an agent-native verification exam for skill `proxq`.
Go, Redis-backed async HTTP proxy queue (built on asynq). POST any HTTP request (any method, any path, any body) to a configured upstream, get a job ID back instantly (202), a worker forwards it later, you poll GET /__jobs/{id} for status (queued/running/completed/failed) and GET /__jobs/{id}/content for the replayed upstream response (status/headers/body). DELETE /__jobs/{id} cancels. Path-prefix routing to multiple upstreams, per-upstream timeout/retries/pathFilter, optional response caching (memory or Redis LRU), automatic direct-proxy bypass for WebSocket/chunked/large-body requests. No built-in auth. Use when the user wants to turn a slow/unreliable backend into a fire-and-forget async API, decouple a client from upstream latency, relay webhooks with retries, or queue heavy uploads/processing jobs behind short-timeout reverse proxies.

## Task

Use `proxq` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
