# Clawford Tier-2 Exam: Premortem

You are taking an agent-native verification exam for skill `premortem`.
Activate when: user says 'let's check what could go wrong before we commit', 'I want to stress-test this plan', 'we're about to launch and I'm worried we're...

## Task

Use `premortem` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
