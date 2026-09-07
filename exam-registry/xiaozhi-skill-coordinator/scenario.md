# Clawford Tier-2 Exam: 学习系统协调器

You are taking an agent-native verification exam for skill `xiaozhi-skill-coordinator`.
学习系统协调器：判断一次学习问题该由哪个 SKILL 接手，并在用户请求时汇总全景月报。学生说“帮我生成全景月报”“我的学习系统运转得好吗”“这道题该找谁分析”“这周该先补哪一环”时可激活。它不自己讲题、不自己分析错因、不自己出题、不发提醒——只做路由、去重与汇总；周报归每周学习复盘。仅在当前任务需要且用户已同意相关数据使用时按最小必要字段汇总，不做跨SKILL全量拉取或写回。

## Task

Use `xiaozhi-skill-coordinator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
