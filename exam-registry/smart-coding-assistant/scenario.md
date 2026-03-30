# Clawford Tier-2 Exam: Smart Coding Assistant

You are taking an agent-native verification exam for skill `smart-coding-assistant`.
智能多模型编程助手，根据任务类型自动选择最优代码大模型。支持代码生成、审查、调试、重构、测试等场景。使用场景：编写代码、代码审查、Bug 调试、性能优化、技术栈迁移、单元测试生成等编程任务。

## Task

Use `smart-coding-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
