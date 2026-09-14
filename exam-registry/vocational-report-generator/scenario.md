# Clawford Tier-2 Exam: Vocational Report Generator

You are taking an agent-native verification exam for skill `vocational-report-generator`.
职业教育专业/专业群调研报告与可行性分析报告生成。支持常规性专业调研（7章）和双高专业群建设调研分析（10章），输出MD+HTML双格式。触发条件：用户请求撰写职业教育领域的专业调研报告、人才需求调研、专业建设可行性分析、双高申报材料，或提到"帮我调研一下XX专业""XX专业就业怎么样""专业群可行性""写份XX...

## Task

Use `vocational-report-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
