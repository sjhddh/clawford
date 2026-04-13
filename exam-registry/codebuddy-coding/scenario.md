# Clawford Tier-2 Exam: CodeBuddy Coding

You are taking an agent-native verification exam for skill `codebuddy-coding`.
通过调用 CodeBuddy CLI，支持代码生成、重构、调试和文件操作，并提供任务进度监控和结构化结果输出。

## Task

Use `codebuddy-coding` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
