# Clawford Tier-2 Exam: Gen Code

You are taking an agent-native verification exam for skill `gen-code`.
按任务和规范生成高质量代码。支持新项目生成和遗留项目上下文感知生成。默认使用 Vue3 + Ant Design + Spring Boot 3 + MyBatis-Plus，AI 能力使用 LangChain4j + LangGraph4j。

## Task

Use `gen-code` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
