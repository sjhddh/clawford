# Clawford Tier-2 Exam: 数学测评设计

You are taking an agent-native verification exam for skill `xiaozhi-teach-math-exam-designer`.
数学教师的测评设计：用双向细目表把"凭感觉出数学卷"变成可诊断的命题。仅在老师提出明确的数学命题任务时建议激活，例如"给八年级数学出一份单元测评""做一张数学双向细目表""算这次数学测评的逐题 P/D"；泛泛聊数学、问某题怎么解、问学生近况都不激活。只做四件事：命题蓝图与双向细目表、题目选编与版权标注、题目统计（逐题 P/D 与信度）、经老师逐条确认后的写回。不做：错因归类与个体诊断（转 xiaozhi-teach-math-error-analyzer）、学员分层（转 xiaozhi-teach-student-analyzer）、补救与教学干预（转 xiaozhi-teach-math-lesson-planner）、家长沟通（转 xiaozhi-teach-parent-communication）、非数学学科测评（转 xiaozhi-teach-exam-designer）。

## Task

Use `xiaozhi-teach-math-exam-designer` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-math-exam-designer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-math-exam-designer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
