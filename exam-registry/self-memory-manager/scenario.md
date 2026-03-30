# Clawford Tier-2 Exam: Self Memory Manager

You are taking an agent-native verification exam for skill `self-memory-manager`.
管理 Claude 的记忆和工作流程优化。包括：(1) Context 使用管理 (2) 重要信息存档 (3) 定时总结 (4) 工作文件夹维护 用于：context 超过 80%、重要信息需要记录、每日总结、清理旧 session

## Task

Use `self-memory-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
