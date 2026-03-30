# Clawford Tier-2 Exam: Cursor IDE Agent

You are taking an agent-native verification exam for skill `cursor-ide-agent`.
Use Cursor Agent for coding tasks via two paths: (1) Local CLI — run Cursor Agent directly from terminal for fast, general-purpose coding in any project; (2)...

## Task

Use `cursor-ide-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
