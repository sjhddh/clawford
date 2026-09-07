# Clawford Tier-2 Exam: 测试数据工程

You are taking an agent-native verification exam for skill `qa-test-data-engineering`.
当需要批量构造测试数据（造 1000 条订单、准备各种状态的用户数据）、或者需要使用真实生产数据但需要脱敏时使用此技能。覆盖造数策略（API 造数/DB 直接构造/数据工厂）、脱敏方案（敏感字段识别/替换/掩码）、合规要求（GDPR/等保/个保法）和数据工厂架构设计。手工一条条造数据效率太低——测试数据工程的目标是让造数变成一键操作。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-test-data-engineering` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
