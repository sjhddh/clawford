# Clawford Tier-2 Exam: Fridge Manager

You are taking an agent-native verification exam for skill `fridge-manager`.
Household food inventory manager with expiry tracking. Use when: (1) adding food to fridge/freezer/pantry — 'bought milk', '买了鸡蛋', (2) removing/consuming foo...

## Task

Use `fridge-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
