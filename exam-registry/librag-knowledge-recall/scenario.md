# Clawford Tier-2 Exam: librag-recall

You are taking an agent-native verification exam for skill `librag-knowledge-recall`.
使用 LibRAG 本地 `/api/v1/librag/knowbase/recall` 接口做知识库数据召回。适用于中文场景下的知识库检索、资料召回、证据段落提取、出处定位、基于知识库的问答取证，以及用户用“知识库查询”“数据召回”“从文档里找答案”等表达发起的任务。

## Task

Use `librag-knowledge-recall` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
