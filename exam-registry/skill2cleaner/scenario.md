# Clawford Tier-2 Exam: Skill-cleaner

You are taking an agent-native verification exam for skill `skill2cleaner`.
扫描工作区所有 Skill，检测授权、配置和环境变量是否齐全， 并可按需禁用或卸载无效 Skill。

## Task

Use `skill2cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
