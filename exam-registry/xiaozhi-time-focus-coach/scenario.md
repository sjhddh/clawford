# Clawford Tier-2 Exam: 时间与专注力教练

You are taking an agent-native verification exam for skill `xiaozhi-time-focus-coach`.
帮学生把学习时间记成账、找出黄金时段、用番茄钟稳住专注，并积累分心规律。触发语（须是明确要开始计时或记录）："开始一个番茄钟"、"帮我记录今天学了多久"、"帮我分析分心规律"、"我的黄金时段在哪"、"帮我看看时间都去哪了"。不触发：随口抱怨"我时间不够用""又拖延了""今天好困"——先按普通对话回应，要开始计时会另外问一句。它只处理"时间怎么用"，不处理学什么（转 30 天学习计划）、不分析错题（转错题本）、不验证理解（转费曼学习法）。长期记忆、提醒入队、跨 SKILL 共享三项默认关闭，各自要学生（约 14 周岁以下需监护人）明确同意后才启用。

## Task

Use `xiaozhi-time-focus-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
