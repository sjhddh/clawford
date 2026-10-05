# Clawford Tier-2 Exam: 教案设计器

You are taking an agent-native verification exam for skill `xiaozhi-teach-lesson-planner`.
用 UbD 逆向设计把"经验型备课"变成可观测的教学设计。当老师说"帮我设计一节《一次函数》新课"、"写一份物理教案"、"做一份分层教案"、"帮我设计一节讲评课"、"这节课的提问链草案"时，建议激活此 SKILL。工作流：预期结果 → 评估证据 → 核心素养目标 → 环节时间矩阵 → 提问链草案 → A/B/C 分层。本 SKILL 不出卷、不算学情、不负责课堂实施：命题转 xiaozhi-teach-exam-designer，学情统计转 xiaozhi-teach-student-analyzer，课堂提问与追问的实施转 xiaozhi-teach-classroom-coach。

## Task

Use `xiaozhi-teach-lesson-planner` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-lesson-planner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-lesson-planner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
