# Clawford Tier-2 Exam: Distill Self-Improving

You are taking an agent-native verification exam for skill `distill-self-improving`.
当用户明确指定文件、目录、项目或资料时，把确认范围加入本机知识库，建立便于查找的目录导航，并逐份读取和整理。对有长期价值的内容分别形成独立总结；对无法读取、敏感、重复或不适合保留的文件逐件说明处理结果。代码项目侧重关键入口和重要说明文档，资料目录按用户要求逐文件处理，是否由 Git 管理只作参考而不会单独决定类型。普通查看、问答或自动发现不会触发，原始文件始终保持不变。

## Task

Use `distill-self-improving` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
