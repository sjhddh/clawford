# Clawford Tier-2 Exam: Loop Prevention

You are taking an agent-native verification exam for skill `loop-prevention`.
操作循环防止规范。防止 Agent 对同一操作反复执行造成资源浪费。适用于 exec 命令、工具调用、文件读写等所有可重复操作。核心规则：同一操作最多 5 次、结果不理想换策略、检测到循环立即停止。

## Task

Use `loop-prevention` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
