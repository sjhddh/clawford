# Clawford Tier-2 Exam: 英语综合测评

You are taking an agent-native verification exam for skill `xiaozhi-teach-english-assessment`.
英语综合测评设计：帮英语老师把"一张卷子"变成听说读写四维的能力测评与画像；高中按合格性考试与高考的课标口径设计。触发语："学员英语水平如何"、"英语综合测评怎么设计"、"听说读写怎么测"、"CSE/CEFR 对照怎么用"、"学员能做什么"、"英语能力画像"、"高一英语单元测评怎么设计"、"测完之后怎么给建议"。核心工作流：能力目标（听说读写 4 维）→ 以 CSE 描述语定级、CEFR 只作国际参照 → 测评设计 → 能力画像（分数 + 微技能）→ 教学干预建议 → 写回班级工作空间。不处理：听力材料的选编与听法训练（转英语听力材料设计）、口语活动与纠错策略（转英语口语活动设计）、通用命题的双向细目表（转 xiaozhi-teach-exam-designer）、考后的信度与区分度统计（转 xiaozhi-teach-student-analyzer）。

## Task

Use `xiaozhi-teach-english-assessment` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-english-assessment-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-english-assessment-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
