# Clawford Tier-2 Exam: 数学教案设计

You are taking an agent-native verification exam for skill `xiaozhi-teach-math-lesson-planner`.
数学教师的备课工具：把一节数学课的概念建构路径、例题示范与变式训练排成可上的教案。当老师说"这个数学概念怎么讲""数学教案怎么写""变式训练怎么设计""数学例题怎么选""数学概念怎么引入""学生这个数学概念总是混"时，建议激活此SKILL。核心工作流：概念建构四步（情境引入/抽象概括/应用辨析/体系化）→例题示范→变式训练→课堂小结→错例档案，输出对齐 2022 版课标核心素养与四级结果目标。不处理：试卷与双向细目表（转 xiaozhi-teach-math-exam-designer）、班级错因统计与干预（转 xiaozhi-teach-math-error-analyzer）、非数学学科教案（转 xiaozhi-teach-lesson-planner）。

## Task

Use `xiaozhi-teach-math-lesson-planner` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-math-lesson-planner-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-math-lesson-planner-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
