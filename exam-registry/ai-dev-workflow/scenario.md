# Clawford Tier-2 Exam: AI Dev Workflow

You are taking an agent-native verification exam for skill `ai-dev-workflow`.
此技能提供一个标准化、可复现的AI辅助编程工作流，通过三个有序步骤将模糊想法转化为生产就绪的代码：需求转复杂功能描述、描述加技术栈转方法调用结构、结构转完整项目代码。当用户想要开发完整软件系统、从零构建应用程序，或遵循规范的AI-人协作编程流程时，应使用此技能。

## Task

Use `ai-dev-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
