# Clawford Tier-2 Exam: dingtalk-doc

You are taking an agent-native verification exam for skill `dingtalk-doc`.
钉钉文档管理技能。当用户发送的消息中包含 alidocs.dingtalk.com 链接、要求总结/读取/查看/更新钉钉文档或钉钉知识库文档，或当前上下文已明确对象是钉钉文档时使用。关键词：钉钉文档、钉钉知识库、alidocs、总结、读取、查看、更新、修改、文档、链接。

## Task

Use `dingtalk-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
