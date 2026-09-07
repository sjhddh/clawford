# Clawford Tier-2 Exam: 试听与学员建档

You are taking an agent-native verification exam for skill `xiaozhi-teach-student-intake`.
把试听从"体验课"变成一次双向诊断，并按最小化原则给新学员建档。适用于老师说"新学员要试听""安排一节试听""试听课怎么上""学员档案怎么建""家长/孩子想学什么""试听完怎么记录""试听后怎么跟进"。流程：确认监护人同意 → 收最小必要信息 → 5W 需求访谈 → 5-10 分钟前测评 → 设计诊断式试讲 → 记录 5 维度观察 → 判断是否适配 → 建正式学员卡。范围到建档为止：不排课、不写课后记录、不登记作业、不做阶段报告、不谈续费与流失挽回，也不收集或存储任何联系方式。排课与课节状态转 schedule-manager，课后记录转 lesson-log，续费/阶段报告/流失跟进转 renewal-report。

## Task

Use `xiaozhi-teach-student-intake` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
