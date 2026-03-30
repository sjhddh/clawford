# Clawford Tier-2 Exam: do-it-gungun - 滚滚判断

You are taking an agent-native verification exam for skill `do-it-gungun`.
帮助地球人做人生选择的 AI 判断技能 - 你只管 do it，判断交给滚滚

## Task

Use `do-it-gungun` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
