# Clawford Tier-2 Exam: Server

You are taking an agent-native verification exam for skill `server`.
Runs web and application services on a host: process supervision, ports and sockets, worker sizing, restarting without dropping requests. Use when a service will not start, dies after logout, restart-loops, or vanishes on reboot; when a port is already in use, or it answers on localhost but refuses connections from outside; when a request returns 502, 504, 413, 499, or a redirect loop between proxy and app; when wiring nginx, Caddy, Traefik, HAProxy, systemd, PM2, or php-fpm; when sizing workers and threads, tuning keepalive and timeouts, or a box runs out of file descriptors or memory under load; when shipping a release and rolling it back; when serving large uploads, WebSockets, or gRPC through a proxy; and when self-hosting apps or media servers. Not for nginx directive tuning (`nginx`), certificate issuance (`ssl`), host OS failures (`linux`), image building (`docker`), Kubernetes (`k8s`), CI/CD pipelines (`deploy`), or provisioning the machine (`vps`).

## Task

Use `server` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
