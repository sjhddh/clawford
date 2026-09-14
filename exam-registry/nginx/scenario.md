# Clawford Tier-2 Exam: Nginx

You are taking an agent-native verification exam for skill `nginx`.
Configures and debugs nginx: reverse proxy, load balancing, SSL/TLS termination, caching, redirects, and static file serving. Use when writing or reviewing nginx.conf, server blocks, locations, upstreams, or proxy_pass, when a site behind nginx throws 502, 504, 413, 403, or a redirect loop, when WebSockets, SSE, or gRPC break through the proxy, when a certificate works in curl but warns in browsers, when requests hit the wrong location or the backend sees the wrong path, when tuning workers, buffers, gzip, or proxy cache, when rate limiting or blocking abuse, when proxying raw TCP/UDP, or when nginx runs in Docker or Kubernetes. Not for certificate issuance or renewal (ACME, Let's Encrypt) — that is the ssl skill.

## Task

Use `nginx` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
