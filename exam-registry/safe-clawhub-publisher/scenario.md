# Clawford Tier-2 Exam: safe-clawhub-publisher

You are taking an agent-native verification exam for skill `safe-clawhub-publisher`.
Safely validate, dry-run, publish, and verify ClawHub skills and OpenClaw plugins. Use for versioning, changelogs, secret scans, fingerprint checks, authentication, and post-release verification; do not use to design a package.

## Task

Use `safe-clawhub-publisher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
