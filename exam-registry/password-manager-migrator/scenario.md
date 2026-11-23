# Clawford Tier-2 Exam: password-manager-migrator

You are taking an agent-native verification exam for skill `password-manager-migrator`.
Use when moving between password managers (Bitwarden/1Password/Keepass/Apple/Chrome/Proton), merging vaults, or auditing one — builds a safe migration plan (export format matrix, dedupe/merge precedence rules, TOTP and attachment traps, 2FA-site re-enrollment list), generates the field-mapping worksheet, and runs a post-migration audit for duplicates, weak leftovers, and reused entries. Never touches actual secrets — works from counts and metadata you paste.

## Task

Use `password-manager-migrator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
