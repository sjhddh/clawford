# Clawford Tier-2 Exam: 🛡️ Credential Vault / 凭证保险箱

You are taking an agent-native verification exam for skill `mjolnir-credential-vault`.
GPG AES-256 encrypted credential management. Requires: GPG (gnupg) installed, Python 3.8+, CRED_MASTER_PASS env var for non-interactive use. Use when the use...

## Task

Use `mjolnir-credential-vault` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
