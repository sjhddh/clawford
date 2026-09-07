# Clawford Tier-2 Exam: 测评设计师

You are taking an agent-native verification exam for skill `xiaozhi-teach-exam-designer`.
帮老师把"拼凑试卷"变成"按双向细目表命题"。当老师**明确要求生成或修改命题产物**时建议激活：出一份单元测验/试卷、写双向细目表、调整试卷难度配比、改编某道题、写评分细则、按题目统计决定哪些题返修。**不激活**：只讨论考试结果与学情分析（转 `xiaozhi-teach-student-analyzer`）、只备讲评课的环节与提问（转 `xiaozhi-teach-lesson-planner` / `xiaozhi-teach-classroom-coach`）、布置作业（转 `xiaozhi-teach-assignment-designer`）、非命题的日常教学讨论。工作流：测评类型 → 双向细目表 → 选题改编 → 难度与认知层级配比 → 评分标准 → 讲评错题清单；考后 P/D/信度只读不算。

## Task

Use `xiaozhi-teach-exam-designer` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-exam-designer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-exam-designer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
