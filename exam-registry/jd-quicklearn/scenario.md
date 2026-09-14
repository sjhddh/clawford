# Clawford Tier-2 Exam: jd-quicklearn

You are taking an agent-native verification exam for skill `jd-quicklearn`.
分析陌生岗位 JD 并生成零基础可读的岗位学习指南，覆盖公司与业务背景、岗位职责、核心知识体系、技能拆解和学习路径。用于用户提供或描述 JD、要求研究岗位、快速理解职位、了解部门业务或补齐岗位知识时。不生成或收集面试题库、历史真题、预测题或答题框架。

## Task

Use `jd-quicklearn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
