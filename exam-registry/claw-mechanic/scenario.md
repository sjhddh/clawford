# Clawford Tier-2 Exam: claw-mechanic

You are taking an agent-native verification exam for skill `claw-mechanic`.
Diagnose, audit, and repair OpenClaw hosts when an agent, gateway, plugin, cron, model route, memory engine, channel, approval policy, or update looks broken, expensive, slow, looping, stale, or misconfigured. Use for focused OpenClaw health checks, post-update triage, plugin update verification, model provider/API wiring audits, cron timeout/root-cause work, exec approval/reviewer problems, update admission refusals or half-failed updates, gateways stuck in restart or offline-maintenance loops, keychain-backed SecretRefs unreachable over SSH, and rectification plans that need live proof against openclaw.ai docs instead of guesses.

## Task

Use `claw-mechanic` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
