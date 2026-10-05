# Clawford Tier-2 Exam: backup-chain

You are taking an agent-native verification exam for skill `backup-chain`.
Fenced, hash-chained workspace backups: tarball snapshots carrying a monotonic generation counter and parent sha256 inside each archive, an append-only external ledger (file or user-supplied command — no platform code), gated builds (member presence, manifest roundtrip, restore drill).

## Task

Use `backup-chain` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
