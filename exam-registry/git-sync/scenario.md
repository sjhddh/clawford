# Clawford Tier-2 Exam: git-sync

You are taking an agent-native verification exam for skill `git-sync`.
全平台统一发布工具。支持 skills 和 agents 的 Gitee/GitHub/ClawHub/SkillHub/PyPI 同步与 Release 创建，LLM 驱动的文件过滤与脱敏。

## Task

Use `git-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
