# Clawford Tier-2 Exam: Dead Code Cleaner

You are taking an agent-native verification exam for skill `dead-code-cleaner`.
基于 codebase-memory-mcp 知识图谱的多阶段死代码检测与安全清理。当用户要求清理无用代码、查找并删除死代码、消除未被引用的文件、进行项目代码清理、或运行基于知识图谱的死代码分析时使用。支持所有编程语言（JS/TS/Vue/React/Python/Java/Go/Rust/C/C++/PHP/C...

## Task

Use `dead-code-cleaner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
