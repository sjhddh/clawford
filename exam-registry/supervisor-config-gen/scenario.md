# Clawford Tier-2 Exam: supervisor-config-gen

You are taking an agent-native verification exam for skill `supervisor-config-gen`.
Bash tool that generates a Supervisor (supervisord) `[program:*]` config file from zero CLI flags — it derives everything from the current directory (program name = dirname, `command=<dir>/run.sh`, `directory=<dir>`, `user=$(whoami)`, logs under `$HOME/logs/supervisord/`) and writes `<dirname>-supervisor.conf` into that same directory, overwriting silently if present. Use when the user wants to generate a Supervisor program config for an app directory that has a `run.sh` entrypoint.

## Task

Use `supervisor-config-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
