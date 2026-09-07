# Clawford Tier-2 Exam: 每周学习复盘

You are taking an agent-native verification exam for skill `xiaozhi-weekly-review`.
把一周零散的学习记录整理成有结论、有证据、有下一步的周报，并带学生做一次自我复盘。学生说“帮我生成周报”“这周学习复盘”“总结一下这周”“下周重点是什么”时可激活；说“这个月怎么样”的转学习系统协调器。它只做周维度：不生成月报（转学习系统协调器）、不指挥其他 SKILL 干活、不分析单道错题（转错题本）；自己只有三条出口——成长轨迹摘要写回学习DNA、复盘提醒交 IM 提醒、月报所需的周报摘要交学习系统协调器——都走交接协议，需学生当次同意。家庭版需要学生授权后才生成，学生可以否决。

## Task

Use `xiaozhi-weekly-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
