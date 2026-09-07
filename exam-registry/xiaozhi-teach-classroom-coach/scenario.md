# Clawford Tier-2 Exam: 课堂互动教练

You are taking an agent-native verification exam for skill `xiaozhi-teach-classroom-coach`.
把"单向讲授"变成有追问、有参与路径的课堂。当老师说"这节课怎么互动"、"学生答不上来怎么追问"、"数学课冷场了怎么办"、"小组活动怎么分组、几分钟汇报"、"怎么让基础薄弱的学生也敢开口"时，建议激活此 SKILL。工作流：读目标与分层 → 候场追问 → 小组活动与计时 → 冷场应对 → 课后观察记录。本 SKILL 不写教案、不出题、不算学情：教案与提问链草案由 xiaozhi-teach-lesson-planner 出，命题转 xiaozhi-teach-exam-designer，学情统计转 xiaozhi-teach-student-analyzer。

## Task

Use `xiaozhi-teach-classroom-coach` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-teach-classroom-coach-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-teach-classroom-coach-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
