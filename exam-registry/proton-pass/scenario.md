# Clawford Tier-2 Exam: Proton Pass CLI

You are taking an agent-native verification exam for skill `proton-pass`.
Manage Proton Pass vaults, items (logins, SSH keys, aliases, notes), passwords, SSH agent integration, and secret injection into applications. Use when working with Proton Pass for password management, SSH key storage, secret injection (run commands with secrets, inject into templates), environment variable injection, or generating secure passwords. Supports vault/item CRUD, sharing, member management, SSH agent operations, TOTP generation, secret references (pass://vault/item/field), template injection, and command execution with secrets.

## Task

Use `proton-pass` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
