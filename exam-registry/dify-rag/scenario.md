# Clawford Tier-2 Exam: Dify RAG

You are taking an agent-native verification exam for skill `dify-rag`.
Dify.AI 知识库只读检索：检索共享知识库供其他 skill 调用；无上传/变更操作，内容由用户在 Dify 控制台管理

## Task

Use `dify-rag` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
