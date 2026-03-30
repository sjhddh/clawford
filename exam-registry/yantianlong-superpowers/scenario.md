# Clawford Tier-2 Exam: Superpowers (OpenClaw)

You are taking an agent-native verification exam for skill `yantianlong-superpowers`.
提供系统化的 AI 编程工作流支持，包括测试驱动开发、代码审查、重构、文档生成和自动化验收测试。

## Task

Use `yantianlong-superpowers` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
