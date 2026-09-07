# Clawford Tier-2 Exam: 测试复盘

You are taking an agent-native verification exam for skill `qa-retrospective`.
当一个迭代结束、一个项目完成、或者发生线上事故需要事后分析时使用此技能。通过系统性的回顾会议和数据复盘，把个人和团队的经验教训转化为可复用的组织资产。不要沦为"说说好话走个形式"——有效的复盘需要有数据支撑（缺陷趋势/漏测分析/效率数据）、有根因分析（为什么出问题）和有 action items（下次怎么做不一样）。输出复盘报告和改进项追踪表。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-retrospective` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
