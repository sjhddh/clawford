# Clawford Tier-2 Exam: Huo15 Openclaw Simplify

You are taking an agent-native verification exam for skill `huo15-openclaw-simplify`.
对最近修改的代码做"复用/质量/效率"三维审查，产出可执行的清理清单；然后实际修复命中的问题。用于刚写完功能、PR 提交前、重构前的自检。触发词：简化代码、清理冗余、重构建议、simplify、code cleanup、代码体检、能不能更简洁。

## Task

Use `huo15-openclaw-simplify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
