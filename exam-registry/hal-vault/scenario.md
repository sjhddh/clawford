# Clawford Tier-2 Exam: hal-vault

You are taking an agent-native verification exam for skill `hal-vault`.
Securely store, search, and use secrets (API keys, tokens, passwords, SSH keys) with hal-vault, an SSH-key encrypted local secret store. Use when the user shares a credential that should be saved, asks what secrets are stored or where a key is, or when a command/workflow needs a secret injected. Core discipline - never print raw secret values into chat, logs, or files; reference secrets only by their masked form, and use --reveal exclusively inside command substitution.

## Task

Use `hal-vault` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
