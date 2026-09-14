# Clawford Tier-2 Exam: Second-Order Thinking

You are taking an agent-native verification exam for skill `second-order-thinking`.
Activate when: user says 'and then what?', 'what are the second-order effects?', 'what could go wrong downstream?', 'what happens once everyone does this?',...

## Task

Use `second-order-thinking` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
