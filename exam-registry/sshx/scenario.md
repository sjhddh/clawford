# Clawford Tier-2 Exam: sshx

You are taking an agent-native verification exam for skill `sshx`.
Operate remote servers with the `sshx` CLI — inspect hosts, dissect remote logs with `sshx text`, run commands over SSH, transfer files over SFTP, apply a single remote file, manage named hosts, store SSH/sudo passwords in the OS keyring or local vault, and run guarded SQL. Use when the user wants structured host discovery, log/exception triage, remote command execution, safe config file changes, upload/download, host management, or safe production database changes. Prefer `--json`. Do not wrap grep/journalctl in `sshx run` when `sshx text` fits.

## Task

Use `sshx` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
