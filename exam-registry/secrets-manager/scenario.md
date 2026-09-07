# Clawford Tier-2 Exam: secrets-manager

You are taking an agent-native verification exam for skill `secrets-manager`.
Encrypted local secret store for OpenClaw agents. AES-256-GCM authenticated encryption with per-secret random IVs, master key in chmod 0600 .master-key file. A PURE STORE: it encrypts, retrieves, lists, rotates, audits, and deletes secrets — it never writes plaintext secrets to disk or generates executable command scripts. Modes: --store (encrypt+write), --get (masked; --raw --confirm-expose prints plaintext to stdout), --list (names+metadata only), --delete (irreversible), --rotate and --rotate --all (generate new random values, archive old as retired), --audit / --audit --expired / --audit --stale (exposure/rotation checks), --status. Supports SECRETS_DIR and SECRETS_MASTER_KEY env overrides. For injecting secrets into shell commands, use the separate `secrets-inject` skill (high-privilege). Master key is recoverable from .master-key file; losing it makes stored secrets unrecoverable.

## Task

Use `secrets-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
