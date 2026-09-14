# Clawford Tier-2 Exam: 测试环境与数据

You are taking an agent-native verification exam for skill `qa-test-env-data`.
当测试环境不稳定、环境不够用、或者需要准备测试数据时使用此技能。覆盖环境部署与配置管理、环境监控与问题排查（环境问题 vs 代码问题的快速区分）、多环境管理策略（开发/测试/预发）和日常测试数据准备。环境问题是最容易浪费测试时间的事——一个稳定的环境比一百个测试用例更有价值。输出环境健康度检查和数据准备 checklist。 ⚠️ 本技能含环境清理步骤，执行前请确认非生产环境。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-test-env-data` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
