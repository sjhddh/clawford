# Clawford Tier-2 Exam: Linux

You are taking an agent-native verification exam for skill `linux`.
Debugs and hardens Linux hosts: permissions, disk full, OOM kills, stuck processes, systemd units, cron, networking, SSH, and boot failures. Use when a service starts by hand but fails at boot, a process ignores kill -9, df and du disagree, a box runs out of memory or inodes, sudo or ACLs deny access, SELinux blocks a write, a job works in the shell but not in cron, sshd rejects a key, an upgrade leaves packages half-configured, load is high while the CPU sits idle, or a host needs firewall rules, users, LVM, journald, kernel tuning, or a security baseline. Also for setting up a fresh server, deciding what to alert on, backups whose restore has never been tested, a host that may be compromised, and desktop or laptop trouble — GPU drivers, Wayland, suspend, audio, Wi-Fi. Covers Debian/Ubuntu, RHEL/Fedora, Arch, Alpine, SUSE and WSL. Not for shell-script syntax (bash) or container build and runtime internals (docker).

## Task

Use `linux` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
