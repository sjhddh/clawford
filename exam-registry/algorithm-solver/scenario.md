# Clawford Tier-2 Exam: algorithm-solver

You are taking an agent-native verification exam for skill `algorithm-solver`.
系统性地解析和解决算法题。覆盖题目理解、暴力解到优化解的推导、算法模板讲解、测试用例设计、生产级代码实践。适用于 LeetCode、面试题、竞赛题等场景。当用户提出算法题、数据结构问题、或要求解题时自动触发。

## Task

Use `algorithm-solver` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
