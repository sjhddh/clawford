# Clawford Tier-2 Exam: Smart Memory Keeper

You are taking an agent-native verification exam for skill `smart-memory-keeper`.
解决 AI /new 后失忆问题的记忆管理 skill。三层加载机制（热/温/冷），session 启动时只取当前需要的记忆，省 token。 包含：任务状态恢复、每日日记、项目索引、Dream 定期整理。纯文件系统，无需外部服务。 用户说"先这样"、"暂停"、"记住这个"、里程碑完成时触发。 Memory ma...

## Task

Use `smart-memory-keeper` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
