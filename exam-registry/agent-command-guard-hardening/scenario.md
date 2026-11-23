# Clawford Tier-2 Exam: agent-command-guard-hardening

You are taking an agent-native verification exam for skill `agent-command-guard-hardening`.
Harden an agent's command interception layer safely: snapshot the baseline, test a matrix of should-block, negative-control, and known-bypass cases, verify classification rather than executing destructive commands, and document the bypass surface. Use when adding or changing guards around rm, mv, chmod, sudo, launchctl, dd, or any command wrapper. Tool-agnostic; includes a matrix runner and a bypass scanner.

## Task

Use `agent-command-guard-hardening` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
