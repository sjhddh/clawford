# Clawford Tier-2 Exam: 子代理任务拆分 + Superpowers

You are taking an agent-native verification exam for skill `subagent-tasking-with-superpowers`.
子代理任务拆分 + using-superpowers 技能执行。每次 spawn 子代理前必须遵守的铁律。结合 using-superpowers 和 subagent-tasking 规则。

## Task

Use `subagent-tasking-with-superpowers` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
