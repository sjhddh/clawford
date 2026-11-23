# Clawford Tier-2 Exam: secrets-manager

You are taking an agent-native verification exam for skill `secrets-manager`.
Encrypted local secret store for OpenClaw agents. AES-256-GCM authenticated encryption with per-secret random IVs, master key in restricted-permission .master-key file. Store, retrieve, rotate, and audit secrets. Safe command injection (writes to temp file by default; --inject-stdout requires --confirm-expose). Master key is recoverable from .master-key file; losing it makes stored secrets unrecoverable.

## Task

Use `secrets-manager` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
