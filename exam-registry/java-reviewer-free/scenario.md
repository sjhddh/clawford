# Clawford Tier-2 Exam: Java代码

You are taking an agent-native verification exam for skill `java-reviewer-free`.
自动审查Java代码变更，生成结构化报告，支持代码问题检测、修复建议和一致性检查，提升代码质量和审查效率。

## Task

Use `java-reviewer-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
