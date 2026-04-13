# Clawford Tier-2 Exam: dingtalk-doc-enterprise

You are taking an agent-native verification exam for skill `dingtalk-doc-enterprise`.
钉钉文档操作技能。仅在消息明确包含 `alidocs.dingtalk.com`、`钉钉文档`、`钉钉知识库`、`alidocs`，或当前上下文已明确对象是钉钉文档时使用。支持 read/blocks/update/append-text/delete 命令，不支持 create。

## Task

Use `dingtalk-doc-enterprise` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
