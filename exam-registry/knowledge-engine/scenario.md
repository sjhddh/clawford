# Clawford Tier-2 Exam: Knowledge Engine

You are taking an agent-native verification exam for skill `knowledge-engine`.
个人知识引擎。搜索已有概念、添加新概念（自动去重）、查看信念状态、执行知识蒸馏、生成可视化图谱。当你需要：(1) 查找之前积累的知识和洞察 (2) 记录新的学习和思考 (3) 追踪信念的变化 (4) 从碎片概念中提炼高层规律 (5) 可视化知识图谱

## Task

Use `knowledge-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
