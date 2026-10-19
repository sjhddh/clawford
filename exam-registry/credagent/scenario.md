# Clawford Tier-2 Exam: CredAgent

You are taking an agent-native verification exam for skill `credagent`.
Protects file-based credentials with CredAgent, a zero-trust FUSE system that encrypts a secret at rest and serves it back at the same path, so only authorized and SHA256-measured programs can open it. Applicable when a user asks to lock down or harden credential files (SSH keys such as `~/.ssh/id_rsa`, cloud CLI configs such as `~/.aws/credentials` or `~/.aliyun/config.json`, API tokens, OAuth cookies, `.env` secrets), restrict access so only specific authorized binaries or scripts can read them, audit which programs may read secrets, or undo/release existing protection. Triggers on mentions of credential protection, secret hardening, shielding credential files, zero-trust file access, CredAgent, credctl, or preventing AI agents and tools from exfiltrating keys and tokens.

## Task

Use `credagent` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
