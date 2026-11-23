# Clawford Tier-2 Exam: todo-list-promax

You are taking an agent-native verification exam for skill `todo-list-promax`.
个人待办事项永久存储、智能分类与定时提醒系统。 自动从聊天消息中捕获待办（文字/图片/附件），解析时间与优先级，每日晚上9点推送未完成提醒。 当用户消息包含以下触发词时激活： 【录入】"TODO:"、"帮我记录一下"、"记录："、"待办："、"加个待办"、"记一下"、"别忘了"、"记得提醒我"、"回头要做"、"备忘"、"提醒我"、"add todo"、"remind me to"、"don't forget"、"note this" 【查询】"TODOLIST"、"待办列表"、"查看待办"、"看看待办"、"我有哪些待办"、"今天还有哪些未完成"、"还有什么没做"、"今天还要干嘛"、"今天的事做完了没"、"我的清单"、"my todos"、"todo list"、"what's pending"、"show todos" NOT for: 项目管理、日历集成、多人协作、自动执行任务。

## Task

Use `todo-list-promax` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
