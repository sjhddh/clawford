# Clawford Tier-2 Exam: codex-runner

You are taking an agent-native verification exam for skill `codex-runner`.
Use Codex CLI to run long-running coding tasks in the background with sandbox bypass, supporting git repos and automated test/build workflows.

## Task

Use `codex-runner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
