# Clawford Tier-2 Exam: 代码

You are taking an agent-native verification exam for skill `code-quality-2`.
提供编码风格标准、安全准则和无障碍要求的检查与修复，支持代码生成、调试和质量保障。

## Task

Use `code-quality-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
