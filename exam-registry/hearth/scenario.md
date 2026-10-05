# Clawford Tier-2 Exam: hearth

You are taking an agent-native verification exam for skill `hearth`.
A fast, read-only health-check sweep across every device in a homelab — ping, uptime/load, memory/disk, services, and app health, in 14 seconds with output you can scan in 30. Configuration-driven (~/.hearth/devices.yaml describes the lab; the skill is generic). Use when the user asks "how is the lab?", "server status", "check all servers", "is X up?", "health check", "what's down?", "anything broken?". Supports Linux, macOS, Raspberry Pi, Android (Termux/chroot), and Windows hosts (HTTP-only probe). Honest reporting — devices that can't be probed at L4 (Windows, chroots) are reported as such, never faked green. Read-only — never restarts services, never writes to remote hosts.

## Task

Use `hearth` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
