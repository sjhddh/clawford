# Clawford Tier-2 Exam: skill-navigator

You are taking an agent-native verification exam for skill `skill-navigator`.
Use when users ask which already-installed local Agent Skill should handle a task. It calls local skm recommendations from the real installed skill catalog; it does not perform the task itself. 当用户询问“做某件事应该用哪款已安装 skill”时使用。它通过本机 skm 基于真实已安装 skill 清单做推荐，本身不执行具体任务。

## Task

Use `skill-navigator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
