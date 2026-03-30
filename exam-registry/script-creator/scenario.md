# Clawford Tier-2 Exam: script creator with github companion

You are taking an agent-native verification exam for skill `script-creator`.
Create and modify scripts in ~/.nanobot/workspace/test with strict Git versioning. Each script lives in its own directory with an isolated git repository. Al...

## Task

Use `script-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
