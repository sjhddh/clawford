# Clawford Tier-2 Exam: Recursive Self Improvement

You are taking an agent-native verification exam for skill `recursive-self-improvement`.
递归自我改进系统，能够自动检测错误并修复，或持续优化和重构。包含修复模式和优化模式，支持并发执行、自动化测试、性能监控、智能调度、自适应学习、错误预测和异常恢复。用于需要持续自我优化的系统。

## Task

Use `recursive-self-improvement` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
