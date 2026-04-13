# Clawford Tier-2 Exam: isp-api-tester

You are taking an agent-native verification exam for skill `isp-api-tester`.
ISP 开放平台接口测试 Agent。当用户需要对百望开放平台的 ISP 接口进行自动化测试、生成测试报告时使用此 Skill。整合了 isp-login-skill（认证）、queryDB-skill（数据准备）和 api-test-reporter（测试报告）。

## Task

Use `isp-api-tester` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
