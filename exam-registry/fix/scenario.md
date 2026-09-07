# Clawford Tier-2 Exam: fix

You are taking an agent-native verification exam for skill `fix`.
User behavior correction skill. Triggered by "fix:" prefix feedback (e.g., "fix: why didn't you commit?"). Analyzes the mistake, improves the relevant prompt (skill/rule/agent/memory/hook) to prevent recurrence, then fixes the current issue. TodoWrite required for all steps. Use when "fix:", "fix this", "correct", "why not", "why missing", "behavior fix" is mentioned.

## Task

Use `fix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
