# Clawford Tier-2 Exam: agent-constraints

You are taking an agent-native verification exam for skill `agent-constraints`.
给 coding agent 设置和治理约束——决定一条规则该落到 hook、AGENTS.md/CLAUDE.md、Skill、path-scoped rule 还是 prompt。当用户要写或改 AGENTS.md、CLAUDE.md、hooks、权限规则、Skill，或者问"agent 老犯某个错该怎么办"、"这条规则该放哪"、"我的 CLAUDE.md 太长了"、"怎么禁止 agent 动某个目录"、"怎么强制它跑完测试再结束"时使用。

## Task

Use `agent-constraints` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
