# Clawford Tier-2 Exam: Openclaw Skill Qa Quickcheck

You are taking an agent-native verification exam for skill `qa-quickcheck`.
AI 驱动的日常测试助手，覆盖 PR 静态审计、动态功能测试、回归策略，2 分钟上手

## Task

Use `qa-quickcheck` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
