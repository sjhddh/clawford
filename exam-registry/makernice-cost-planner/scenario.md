# Clawford Tier-2 Exam: cost-planner

You are taking an agent-native verification exam for skill `makernice-cost-planner`.
Plan which Makernice models, resolutions and durations fit a budget before generating anything. Use when the user gives a budget in USD, asks how many videos or images they can make, or wants to compare the price of options. Planning never creates jobs or charges anything.

## Task

Use `makernice-cost-planner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
