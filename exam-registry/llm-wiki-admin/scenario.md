# Clawford Tier-2 Exam: llm-wiki-knowledge-Karpathy

You are taking an agent-native verification exam for skill `llm-wiki-admin`.
LLM Wiki 知识库管理员。管理基于 Karpathy LLM-Wiki 理念的持久知识库，包括：初始化项目、摄入新原始资料（编译为 wiki 页面）、回答基于 wiki 的查询、执行健康检查（lint）。当用户想要初始化知识库、ingest/摄入新文章或笔记、从 wiki 查询知识、维护 wiki 健康、或...

## Task

Use `llm-wiki-admin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
