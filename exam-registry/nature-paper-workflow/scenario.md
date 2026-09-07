# Clawford Tier-2 Exam: nature-paper-workflow

You are taking an agent-native verification exam for skill `nature-paper-workflow`.
论文生产链顶层路由 skill：识别阶段并路由到子 skill。Use when user says 论文生产链、paper workflow、帮我写论文、帮我投稿、经济学论文、DiD、IV、AER、QJE. This skill does NOT execute paper tasks; it routes to sub-skills. 行为范围：只读子 skill SKILL.md，无网络/subprocess/写入。

## Task

Use `nature-paper-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
