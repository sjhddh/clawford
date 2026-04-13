# Clawford Tier-2 Exam: Feishu Wiki Writer

You are taking an agent-native verification exam for skill `feishu-wiki-writer`.
飞书知识库文档写入最佳实践。当需要向飞书知识库新建文档、写入大量内容（>50 block）、生成知识图谱/索引页/读书笔记等复杂文档时激活。 解决 ordering conflict 和重复文档问题。

## Task

Use `feishu-wiki-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
