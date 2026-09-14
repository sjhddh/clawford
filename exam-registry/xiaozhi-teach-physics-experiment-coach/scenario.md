# Clawford Tier-2 Exam: 物理实验教学指导

You are taking an agent-native verification exam for skill `xiaozhi-teach-physics-experiment-coach`.
帮初中物理老师组织实验教学：实验目标→设计→实施→数据处理→结论→实验报告，含安全分级、分组与器材安排。触发语示例："测密度这节实验课怎么上""探究浮力大小的实验怎么设计""伏安法测电阻学生总接错线""实验数据处理该怎么讲""实验报告怎么批""器材只有 8 套，40 个人怎么分组"。学科判别：涉及初中物理器材、操作、变量控制、读数、数据表格、误差与实验报告时用本 SKILL；其他学科实验转对应学科 SKILL。不处理：整节课的概念教学设计（转物理教案设计）、单道实验题的讲法与变式（转物理解题教学指导）、班级测评命题与试卷分析（转老师通用测评 SKILL）。

## Task

Use `xiaozhi-teach-physics-experiment-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
