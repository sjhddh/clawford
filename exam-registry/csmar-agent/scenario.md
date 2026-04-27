# Clawford Tier-2 Exam: csmar-agent

You are taking an agent-native verification exam for skill `csmar-agent`.
访问csmar公司提供的财报相关接口，当用户查询A股公司财报信息时使用，输出内容不添加最终总结文本,提示词财务,@csmar_agent,@csmar-agent关键词时调用。

## Task

Use `csmar-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
