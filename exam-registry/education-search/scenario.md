# Clawford Tier-2 Exam: Education Search 教育学习搜索助手

You are taking an agent-native verification exam for skill `education-search`.
学历教育与职业培训搜题工具。从习题库中查找习题、真题、试卷等资源，涵盖教资考试、行测、考研真题等各类学历教育和职业培训相关内容。当用户需要查找真题、试卷、教资考题、行测题、考研真题、数学习题等具体考题资源时使用此 skill。

## Task

Use `education-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/education-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/education-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
