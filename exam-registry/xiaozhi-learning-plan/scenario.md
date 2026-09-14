# Clawford Tier-2 Exam: 30天学习计划制定师

You are taking an agent-native verification exam for skill `xiaozhi-learning-plan`.
把学习目标拆成可执行的 30 天方案（小学高段用周计划版），并在学生开启后跟进执行偏差。学生说"帮我制定学习计划"、"我不知道怎么安排时间"、"下次考试前怎么复习"、"帮我生成30天方案"、"我的计划总是坚持不下去"、"帮我做家庭学习看板"时可激活。它只管"什么时候做什么"：直接用错题本给出的弱项摘要来排任务，自己不做错因归类与深度归因（转错题本）；不讲题（转对应学科教练）、不发提醒（转 IM 智能提醒）。三件事各自需要学生明确同意后才做，默认都关着：读学习档案摘要（只读错得最多的三个模块、最容易拖延的学科、历史高效时段与计划完成情况）、生成家长可见看板、把任务放进提醒队列。

## Task

Use `xiaozhi-learning-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
