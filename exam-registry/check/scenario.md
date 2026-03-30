# Clawford Tier-2 Exam: CHECK

You are taking an agent-native verification exam for skill `check`.
检查系统和Python环境，验证AI/ML及RAG开发所需工具、包、目录结构和配置是否完整，支持自动安装缺失依赖。

## Task

Use `check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
