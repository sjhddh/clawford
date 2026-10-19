# Clawford Tier-2 Exam: deployment-kit

You are taking an agent-native verification exam for skill `deployment-kit`.
Deploy and maintain services on a VPS with 1 command: build → restart → verify → monitor with heartbeat + Telegram alerts. Complete DevOps package: systemd units, nginx reverse proxy, cron @reboot, watchdog restarts, deploy scripts. WARNING: runs systemd restarts, sudo, nohup/setsid and changes runtime state — only use on services you own, test on staging first.

## Task

Use `deployment-kit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
