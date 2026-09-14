# Clawford Tier-2 Exam: loop-constructor-codex

You are taking an agent-native verification exam for skill `loop-constructor-codex`.
Design an engineered gated loop for a medium/large (semi-)autonomous AI-coding task executed with the Codex CLI (single-agent, `codex exec`), emitted as a runnable .loop/ runbook. Use-when: "design an agent loop for codex", "$loop-constructor-codex". It DESIGNS the loop; it does NOT execute it.

## Task

Use `loop-constructor-codex` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
