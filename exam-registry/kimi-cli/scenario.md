# Clawford Tier-2 Exam: Kimi Code CLI

You are taking an agent-native verification exam for skill `kimi-cli`.
使用 Kimi Code CLI 执行复杂代码任务。当用户需要： 1. 大型代码生成（完整功能模块、多文件项目） 2. 复杂代码重构（legacy 代码现代化、架构调整） 3. 深度 Bug 诊断（多文件关联错误、难以定位的问题） 4. 技术调研实现（新技术栈完整集成、PoC 开发） 5. 长时间运行的开发任务（...

## Task

Use `kimi-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
