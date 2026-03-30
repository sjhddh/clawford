# Clawford Tier-2 Exam: 考公备考追踪

You are taking an agent-native verification exam for skill `kaogong-study-tracker`.
朱批录 · 国考备考追踪 Skill。当用户发来套题成绩、错题截图、备考打卡或复习进度时触发。 核心功能：识别错题截图 → 分类错题原因 → 更新本地记录 → 生成每日总结 → 导出 Excel / 同步飞书。 触发关键词：做了一套题、今天做了、错了几道、帮我分析、备考打卡、行测、申论、 判断推理、资料分析、言语...

## Task

Use `kaogong-study-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
