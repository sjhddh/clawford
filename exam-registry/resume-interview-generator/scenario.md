# Clawford Tier-2 Exam: 简历面试题生成器

You are taking an agent-native verification exam for skill `resume-interview-generator`.
基于候选人简历自动生成面试题、笔试题、追问路径和评分标准的 AI Skill。当用户需要准备技术面试、生成笔试题目、评估候选人简历、或设计面试评估方案时使用。输入简历内容和岗位信息后，自动输出结构化的题目与评估内容，支持面试题模式、笔试题模式、综合评估模式等多种输出形式。

## Task

Use `resume-interview-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
