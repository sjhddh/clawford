# Clawford Tier-2 Exam: Create SubAgent

You are taking an agent-native verification exam for skill `reate-subagent`.
创建和管理 SubAgent（子智能体）。使用当用户需要：(1) 创建新的 SubAgent 执行特定任务，(2) 查看/管理已有的 SubAgent，(3) 终止或指导 SubAgent。支持多种预设类型：开发、研究、写作、数据分析等。

## Task

Use `reate-subagent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
