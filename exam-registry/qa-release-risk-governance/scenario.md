# Clawford Tier-2 Exam: 发布测试风险治理

You are taking an agent-native verification exam for skill `qa-release-risk-governance`.
当版本要发布了、需要决定"能不能发"、或者需要设计灰度/回滚方案时使用此技能。系统化评估变更风险（变更范围/影响面/回退成本），设计灰度发布策略（按用户/区域/流量比例），制定回滚方案和线上监控计划。不要问"这个版本稳不稳"——要问"如果出问题了，我们能在几分钟内发现并回滚"。产出发布风险评估报告和灰度发布方案。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-release-risk-governance` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
