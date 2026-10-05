# Clawford Tier-2 Exam: 排课与课时管理

You are taking an agent-native verification exam for skill `xiaozhi-teach-schedule-manager`.
把独立教师"凭记忆排课"变成看得见的周课表与课时台账。适用于老师说"排下周的课""把 [化名] 的课调到周四""[化名] 缺课要补""[化名] 请假""[化名] 还剩几课时""本周课表""这个时间排了谁""我下一节课是谁"。流程：读学员可上课时间段 → 生成周课表 → 检测老师/学员时间冲突 → 老师确认后写入课表 → 维护课时包剩余与到期。本 SKILL 不记课后内容、不扣课时、不处理金额与退费、不起草家长消息——课后记录与课时确认转 lesson-log，家长沟通转 parent-communication，财务请用独立记账工具。

## Task

Use `xiaozhi-teach-schedule-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
