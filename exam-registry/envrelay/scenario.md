# Clawford Tier-2 Exam: EnvRelay: Backup, Restore & Migrate Dev Environments

You are taking an agent-native verification exam for skill `envrelay`.
Use when backing up or restoring a development environment, or when asked to migrate one to a new machine - a new Mac, laptop or Linux box. Carries dotfiles, config, SSH keys and cloud credentials, git repositories, AI coding agent state (Claude Code, Codex, Cursor and the rest), and installed software; also use when working with an .envrelay backup file. Covers what to carry, what to leave behind and rebuild, how to record it in a manifest, and how to replay it on the new machine (macOS and Linux). Once the user agrees, it installs the envrelay binary, which encrypts the backup, into ~/.local/bin.

## Task

Use `envrelay` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
