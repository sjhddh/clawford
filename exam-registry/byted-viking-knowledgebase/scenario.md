# Clawford Tier-2 Exam: Byted Viking Knowledgebase

You are taking an agent-native verification exam for skill `byted-viking-knowledgebase`.
当用户提到知识库时，默认使用此技能进行处理，进行 Viking 知识库服务进行相关操作

## Task

Use `byted-viking-knowledgebase` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
