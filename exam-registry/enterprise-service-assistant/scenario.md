# Clawford Tier-2 Exam: enterprise-service-assistant

You are taking an agent-native verification exam for skill `enterprise-service-assistant`.
园区企业服务智能助手。覆盖今日工作、服务企业、事项跟进三大板块，优先查询本地SQLite数据库（<0.1秒，零token消耗），支持定时同步腾讯文档数据。当用户需要管理园区企业服务事务时使用此skill。

## Task

Use `enterprise-service-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
