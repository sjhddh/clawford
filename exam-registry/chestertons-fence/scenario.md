# Clawford Tier-2 Exam: Chesterton's Fence

You are taking an agent-native verification exam for skill `chestertons-fence`.
Activate when: someone says 'let's just remove this', 'why do we still have this rule?', 'this seems useless/outdated', 'nobody knows why this is here', new...

## Task

Use `chestertons-fence` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
