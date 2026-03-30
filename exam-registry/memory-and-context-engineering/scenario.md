# Clawford Tier-2 Exam: AGI记忆模组

You are taking an agent-native verification exam for skill `memory-and-context-engineering`.
当智能体需要"memory"与"Context"操作时触发；智能体底层记忆基础设施，完整实现Context Engineering五大核心能力：选择（噪声过滤+相关性筛选）、压缩（因果结构提取+工具结果压缩）、检索（结果重排序+多样性保证）、状态（任务进度追踪+目标对齐）、记忆（冲突检测+跨会话关联）；认知模型层...

## Task

Use `memory-and-context-engineering` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
