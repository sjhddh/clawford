# Clawford Tier-2 Exam: Skill Registry Manager

You are taking an agent-native verification exam for skill `skills-registry-manager`.
管理和安装 Claude Code skills 的工具。Use when: 列出可用skills、有哪些skills、安装skill、管理skills、添加订阅、列出订阅、查看订阅、删除订阅、取消订阅。NOT for: 与 skill 管理无关的任务。

## Task

Use `skills-registry-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
