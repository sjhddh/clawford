# Clawford Tier-2 Exam: LLM增强服务

You are taking an agent-native verification exam for skill `chucknorris`.
ChuckNorris MCP服务器是一个通过动态模式适配为大型语言模型提供增强提示的工具，主要用于安全研究和评估。

## Task

Use `chucknorris` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
