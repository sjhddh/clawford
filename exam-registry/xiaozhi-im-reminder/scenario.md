# Clawford Tier-2 Exam: IM智能提醒

You are taking an agent-native verification exam for skill `xiaozhi-im-reminder`.
全库唯一的提醒发送方：把其他 SKILL 入队的复习、错题复测、计划任务、探索任务合并成每天一条摘要发出。只在学生说出**明确的提醒动词**时激活：“帮我设置提醒”“提醒我复习二次根式”“我今天该复习什么”“暂停提醒”“查看我的提醒”。提到“提醒”但不是要操作提醒的话（“老师提醒过我”“提醒一下自己要早睡”）不激活；其他 SKILL 完成任务后也不自动入队，要学生当轮说“要”。提醒内容本身不在这里生成——错题由错题本、词卡由英语词汇 DNA、任务由 30 天学习计划提供，本 SKILL 只做排期、合并与发送。未获授权时只给“建议提醒方案”，不创建实际提醒，也不做闲置唤醒。

## Task

Use `xiaozhi-im-reminder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
