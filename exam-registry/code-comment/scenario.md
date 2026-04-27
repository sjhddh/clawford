# Clawford Tier-2 Exam: Code Comment

You are taking an agent-native verification exam for skill `code-comment`.
所有编码任务的注释规范约束。只要任务涉及编写、修改、审查、重构代码，无论是新增功能、修 bug、code review、写工具函数、还是解释代码片段，都必须触发此 skill，确保输出的代码注释符合资深开发者风格：简练、纯中文、聚焦 Why、无 AI 味。支持 Java、C++、Kotlin、JavaScript...

## Task

Use `code-comment` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
