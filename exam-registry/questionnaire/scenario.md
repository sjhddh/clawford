# Clawford Tier-2 Exam: 问句需求调研

You are taking an agent-native verification exam for skill `questionnaire`.
通用模版。用户上传多个独立文档（问句、指标维度说明书、业务知识说明书、数据字典、表结构数据），自动提取指标、维度和过滤条件并输出。

## Task

Use `questionnaire` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
