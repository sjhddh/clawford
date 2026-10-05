# Clawford Tier-2 Exam: VPS

You are taking an agent-native verification exam for skill `vps`.
Runs rented virtual private servers end to end: picking a provider and plan, first boot, snapshots, resizing, IP addresses, and moving between hosts. Use when choosing between Hetzner, DigitalOcean, Vultr, or Linode, when a box is unreachable and it is unclear whether the fault is the provider or the machine, when SSH refuses and the only way in is the web console or rescue mode, when the disk filled, the plan has to change, or a snapshot has to be restored, when a firewall rule looks correct but is ignored, when the provider sends an abuse notice or suspends the server, when outbound mail is rejected or blacklisted, or when bandwidth overage or IPv4 charges make the bill jump. Covers provider firewalls, private networking, and restorable backups. Not for Linux internals (`linux`), container runtime problems (`docker`), reverse-proxy/TLS configuration (`nginx`), DNS record design (`dns`), or managed platforms with no server to administer (`hosting`).

## Task

Use `vps` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
