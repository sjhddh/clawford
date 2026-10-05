# Clawford Tier-2 Exam: password-auditor

You are taking an agent-native verification exam for skill `password-auditor`.
Audit password vault exports (Bitwarden, 1Password, KeePass, Chrome, Firefox) for reuse, weakness, staleness, breach exposure, and 2FA gaps without ever storing or transmitting a plaintext password. Use when the user asks to audit passwords, check password strength/reuse, review vault health, or verify whether credentials appeared in breaches.

## Task

Use `password-auditor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
