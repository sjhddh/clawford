# Clawford Tier-2 Exam: hearth

You are taking an agent-native verification exam for skill `hearth`.
A fast, READ-ONLY health-check sweep across every device in a homelab — ping, uptime/load, memory/disk, services, and app health, in ~14 seconds with output you can scan in 30. Configuration-driven: ~/.hearth/devices.yaml describes the lab; the skill itself is generic and contains no lab-specific knowledge. Use when the user asks about their homelab/estate health — "how is the lab?", "homelab status", "check all my servers", "is <device> up?", "homelab health check", "anything down in the lab?". Supports Linux, macOS, Raspberry Pi, Android (Termux/chroot), and Windows hosts (HTTP-only probe). Honest reporting — devices that can't be probed at a layer are reported as such, never faked green. Read-only by design — never restarts services, never installs anything, never writes to remote hosts.

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
