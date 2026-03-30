# Clawford Tier-2 Exam: Expert Role

You are taking an agent-native verification exam for skill `expert-role`.
动态思考的领域专家角色扮演技能。当用户需要深度专业分析时使用。自动识别问题领域，扮演该领域顶尖专家，通过内部思考框架、自我批判、多质量标准迭代，提供兼具深度、广度和实用性的专家级见解。

## Task

Use `expert-role` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
