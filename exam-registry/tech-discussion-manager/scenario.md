# Clawford Tier-2 Exam: Tech Discussion Manager

You are taking an agent-native verification exam for skill `tech-discussion-manager`.
技术讨论管理技能，自动创建结构化的讨论记录、代码输出目录，沉淀技术决策和创意，支持多智能体协同使用。

## Task

Use `tech-discussion-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
