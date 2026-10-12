# Clawford Tier-2 Exam: 技能免费版

You are taking an agent-native verification exam for skill `skill-vetter-free`.
基础版 AI Agent 技能审查工具，执行来源检查和 RED FLAGS 代码审查，提供安装安全建议，不含风险分级和权限评估。

## Task

Use `skill-vetter-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
