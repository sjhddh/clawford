# Clawford Tier-2 Exam: Google Colab GPU Runtime

You are taking an agent-native verification exam for skill `colab`.
Execute code on Google Colab GPU runtimes (T4/L4/A100/H100) and manage persistent storage via Google Drive. Use when tasks need GPU compute (ML training, inf...

## Task

Use `colab` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
