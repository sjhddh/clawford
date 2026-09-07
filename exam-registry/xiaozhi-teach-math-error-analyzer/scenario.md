# Clawford Tier-2 Exam: 班级错因分析

You are taking an agent-native verification exam for skill `xiaozhi-teach-math-error-analyzer`.
数学教师的班级错因分析：把作业与试卷的错题变成"下节数学课讲什么"。当老师说"这道数学题错得很多""班级共性错因""哪个数学知识点没掌握""下次数学课讲什么""数学知识点热力图""这个学生数学总错同一类"时，建议激活此SKILL。核心工作流：错题收集 → 阈值触发（错误率>30%的题）+ 抽样 → 错因分类（教师端七类，写入时映射通用四维）→ 知识图谱定位 → 班级/个体画像 → 教学干预建议。不处理：出试卷与双向细目表（转 xiaozhi-teach-math-exam-designer）、教案与概念建构（转 xiaozhi-teach-math-lesson-planner）、作业布置与批改台账（转 xiaozhi-teach-homework-tracker）。

## Task

Use `xiaozhi-teach-math-error-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-math-error-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-math-error-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
