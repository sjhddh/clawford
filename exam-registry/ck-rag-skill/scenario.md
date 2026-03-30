# Clawford Tier-2 Exam: ck-rag-skill

You are taking an agent-native verification exam for skill `ck-rag-skill`.
RAGFlow知识库问答与操作指导。调用RAGFlow知识库API进行智能问答，并基于知识库返回结果提供agent操作建议。支持流式输出，耐心等待完整响应生成。当用户提出技术问题、故障排查、操作指导或需要知识库检索时触发此技能。适用于容器/Docker问题、系统运维、开发相关问题等场景。

## Task

Use `ck-rag-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
