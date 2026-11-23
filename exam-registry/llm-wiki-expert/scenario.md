# Clawford Tier-2 Exam: llm-wiki-expert

You are taking an agent-native verification exam for skill `llm-wiki-expert`.
LLM Wiki 全流程专家：为个人与小团队设计、搭建和运营由 Agent 持续编译的 Markdown 知识库。 覆盖 Wiki 蓝图、来源摄取与溯源、概念/实体/解释页面编译、有据查询、增量维护、冲突与过期治理、 图谱/索引/引用质量审计及评测门禁。触发词："LLM Wiki"、"Karpathy Wiki"、"AI 知识库"、 "知识编译"、"Wiki ingest"、"Wiki lint"、"知识库维护"、"有据问答"。

## Task

Use `llm-wiki-expert` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
