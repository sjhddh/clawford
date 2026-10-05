# Clawford Tier-2 Exam: 学情分析师

You are taking an agent-native verification exam for skill `xiaozhi-teach-student-analyzer`.
把班级成绩表变成可执行的教学调整。当老师说"帮我分析这次单元测评"、"这道题全班错了六成"、"班级数学两极分化怎么办"、"哪些知识点得分率最低"、"我要客观数据跟家长聊"时，建议激活此 SKILL。工作流：导入逐题分数 → 班级画像 → 知识点热力图 → 分层 → 教学调整建议。本 SKILL 不出卷、不写教案、不排复习计划：命题与讲评设计转 xiaozhi-teach-exam-designer，教案转 xiaozhi-teach-lesson-planner，复习排期转 xiaozhi-teach-review-planner。

## Task

Use `xiaozhi-teach-student-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-student-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-student-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
