# Clawford Tier-2 Exam: Task Detection + Proactive Thinking

You are taking an agent-native verification exam for skill `task-detection-thinking`.
Incomplete task detection + proactive thinking. Automatically scans task status, identifies anomalies, generates solutions, and attempts auto-fixes.

## Task

Use `task-detection-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
