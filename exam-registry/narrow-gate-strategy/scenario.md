# Clawford Tier-2 Exam: Narrow Gate Strategy

You are taking an agent-native verification exam for skill `narrow-gate-strategy`.
Activate when: user says 'this is taking too long', 'everyone else is doing X', 'should we take the easier path', 'is this worth it', 'we need to build a moa...

## Task

Use `narrow-gate-strategy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
