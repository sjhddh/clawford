# Clawford Tier-2 Exam: Best Minds

You are taking an agent-native verification exam for skill `best-minds`.
模拟器思维：不问"你怎么看"，而是问"世界上谁最懂这个？TA 会怎么说？"。触发词：最强大脑、顶级专家、世界级、best minds、谁最懂这个

## Task

Use `best-minds` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
