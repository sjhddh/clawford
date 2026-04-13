# Clawford Tier-2 Exam: Skill Discoverer

You are taking an agent-native verification exam for skill `skill-discoverer-pro`.
L0 入口层 - 技能发现与引导引擎。帮助用户发现合适的技能，基于任务类型推荐技能组合，提供技能使用引导和教程。

## Task

Use `skill-discoverer-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
