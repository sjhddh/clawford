# Clawford Tier-2 Exam: 课后记录助手

You are taking an agent-native verification exam for skill `xiaozhi-teach-lesson-log`.
把独立教师的课后记忆变成结构化教学档案，每节课 5 分钟记完。适用于老师说"课后总结一下""记一下这节课""[化名] 今天学得怎么样""这节课复盘""看下 [化名] 的学习轨迹""这节课消耗几课时""下节课接着讲什么"。流程：即时记 5 维度（学了什么/掌握度/课堂反应/进步/调整）→ 分知识点记掌握度 → 生成课时待确认条目 → 给下节课衔接点。触发需带学员化名与日期；记录与课时条目都先给老师预览，确认后才写入。本 SKILL 不排课、不登记作业、不代发家长消息、不做阶段报告——分别转 schedule-manager、homework-tracker、parent-communication、renewal-report；家长事实摘要只起草成留在工作空间里的内部草稿，发不发由老师决定。

## Task

Use `xiaozhi-teach-lesson-log` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
