# Clawford Tier-2 Exam: JD + 简历 → 面试题预测助手

You are taking an agent-native verification exam for skill `jd-interview-prep`.
上传岗位描述（JD）和个人简历，AI 自动预测面试题（必问/针对性/追问三类）， 给出 STAR 答题框架，分析简历与 JD 匹配度，导出备考手册。

## Task

Use `jd-interview-prep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
