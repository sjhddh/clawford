# Clawford Tier-2 Exam: tox-tunnel-ops

You are taking an agent-native verification exam for skill `tox-tunnel-ops`.
Encrypted P2P TCP tunneling for remote network access — a self-hosted VPN / ngrok / Tailscale alternative built on the Tox protocol (libsodium). No API keys, no accounts, no central servers, no port-forwarding. Solves NAT traversal, carrier-grade NAT, double NAT, intranet penetration (内网穿透), and remote machine access without router or firewall changes. Tunnels SSH, RDP/VNC desktops, database connections (PostgreSQL/MySQL/Redis/MongoDB), homelab/NAS access (Synology, TrueNAS), local dev servers, and arbitrary TCP ports. Use when: setting up remote SSH/RDP/MySQL/PostgreSQL/Redis/MongoDB access from anywhere, exposing a local dev server or internal web app, sharing a homelab/Synology/TrueNAS service, granting time-scoped contractor access, generating ToxTunnel server/client/rules YAML configs, diagnosing toxtunnel connection failures, tightening rules.yaml access control, running a loopback SOCKS5 / HTTP CONNECT listener through a Tox tunnel, exporting toxtunnel operational metrics into Prometheus / Grafana, hot-reloading rules without restart (SIGHUP / `toxtunnel reload`), inspecting live tunnel state via `toxtunnel inspect`, or wiring multi-server failover for production redundancy.

## Task

Use `tox-tunnel-ops` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
