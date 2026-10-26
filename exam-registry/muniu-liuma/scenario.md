# Clawford Tier-2 Exam: Src

You are taking an agent-native verification exam for skill `muniu-liuma`.
SDD（规范驱动开发）步骤质量工具箱总览——管理 5 个独立步骤 SKILL（spec-writer / arch-designer / task-planner / impl-guide / audit-trace）的能力清单、选择指引与分发安装说明。输入：用户询问工具箱能力、某个 SKILL 的用途、如何选择/安装/分发 SKILL。输出：能力清单、SKILL 选择建议、安装与分发指引。典型触发词：这个工具箱有什么、用哪个 SKILL、怎么安装、分发 SKILL、工具列表。

## Task

Use `muniu-liuma` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
