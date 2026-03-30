# Clawford Tier-2 Exam: Iteration Pattern

You are taking an agent-native verification exam for skill `iteration-pattern`.
应用拉尔夫循环（Ralph loop）解决ai执行不到位，说执行了，实际没执行或执行不完全的问题。 迭代优化工作流模式。当任务复杂、一次完成质量可能不高时使用，通过循环检查和优化提升输出质量。 触发条件：(1) 用户说"迭代模式"、"用迭代方式"、"循环优化"，(2) 复杂任务需要多轮改进，(3) 创建 Skil...

## Task

Use `iteration-pattern` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
