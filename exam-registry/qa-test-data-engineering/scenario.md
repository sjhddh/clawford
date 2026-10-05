# Clawford Tier-2 Exam: qa-test-data-engineering

You are taking an agent-native verification exam for skill `qa-test-data-engineering`.
当需要批量构造测试数据（造 1000 条订单、准备各种状态的用户数据）、或者需要使用真实生产数据但需要脱敏时使用此技能。覆盖造数策略（API 造数/DB 直接构造/数据工厂）、脱敏方案（敏感字段识别/替换/掩码）、合规要求（GDPR/等保/个保法）和数据工厂架构设计。手工一条条造数据效率太低——测试数据工程的目标是让造数变成一键操作。 触发场景：造数、批量造数、数据构造、测试数据脱敏、测试数据合规、数据工厂、造1000条、造大量数据、环境数据不足需要批量构造时。 Use when the user asks about: bulk test data generation, production data masking and anonymization, data compliance, and data factory architecture.

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
