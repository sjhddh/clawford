# Clawford Tier-2 Exam: 阶段报告与续课助手

You are taking an agent-native verification exam for skill `xiaozhi-teach-renewal-report`.
用学员真实的学习记录做一份阶段报告，让续课变成家长看完事实后的自主选择。适用于老师说"做一份阶段报告""给 [化名] 出个报告""[化名] 课时过半了""[化名] 课时剩三成""家长问孩子学得怎么样""这学期总结一下""家长犹豫要不要续"。流程：汇总课后记录与作业错因 → 写事实/进步/计划三段 → 无逐知识点分数时只出定性判断 → 给续课建议与话术。出报告前须先指定学员化名；它会读这名学员跨月的学习记录，家长可见的内容一律先过授权检查。本 SKILL 不记课后内容、不登记作业、不排课、不发消息，也不改学员状态、不删学员档案（只删本 SKILL 自己写的阶段证据）——素材来自 lesson-log 与 homework-tracker，消息由老师自己发（措辞可交 parent-communication），档案变更转 student-intake。

## Task

Use `xiaozhi-teach-renewal-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
